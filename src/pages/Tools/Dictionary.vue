<template>
    <div class="wrapper">
        <SideBar></SideBar>
        <div id="content">
            <Header title='Dictionary'></Header>
            <div class="big-container">
                <div class="container">
                <h4 class="dictionary-title">Oxford Dictionary</h4>
                <div class="word-input-container">
                    <input 
                            type="text" 
                            class="input-word" placeholder="Enter a vocabulary" 
                            v-model="vocabulary" 
                            v-on:keyup.enter="searchForVocabulary"
                    >
                    <input 
                            type="button" 
                            v-on:click="searchForVocabulary" 
                            value="Find"
                    >
                </div>
                <dl v-if="responseAPI">
                    <dt class="syllables"><h5>{{ syllables }}</h5></dt>
                    <dt class="pron"><h5>{{ pronunciation }}</h5></dt>
                    <hr>
                    <dd v-if="nouns.length">
                        <h5 class="word-form">Noun</h5>
                        <h6><b>Definition</b></h6>
                        <ol>
                            <li v-for="noun in nouns" v-bind:key="noun" class="definitions">
                                <p><b>{{ noun.definition }}</b></p>
                                <p v-if="noun.examples"><u>Examples:</u></p>
                                <p v-for="sentence in noun.examples" v-bind:key="sentence" class="sentences">
                                    <q>{{ sentence }}</q>
                                </p>
                                <dl>
                                    <dt class="syn-title" v-if="noun.synonyms">Synonyms</dt>
                                    <dd v-for="synonym in noun.synonyms" v-bind:key="synonym" class="synonyms"> 
                                        <i>{{ synonym }}</i>
                                    </dd>
                                </dl>
                            </li>
                        </ol>
                    </dd>
                    <hr>
                    <dd v-if="verbs.length">
                        <h5 class="word-form">Verb</h5>
                        <h6><b>Definition</b></h6>
                        <ol>
                            <li v-for="verb in verbs" v-bind:key="verb" class="definitions">
                                <p><b>{{ verb.definition }}</b></p>
                                <p v-if="verb.examples"><u>Examples:</u></p>
                                <p v-for="sentence in verb.examples" v-bind:key="sentence" class="sentences">
                                    <q>{{ sentence }}</q>
                                </p>
                                <dl>
                                    <dt class="syn-title" v-if="verb.synonyms">Synonyms</dt>
                                    <dd v-for="synonym in verb.synonyms" v-bind:key="synonym" class="synonyms"> 
                                        <i>{{ synonym }}</i>
                                    </dd>
                                </dl>
                            </li>
                        </ol>
                    </dd>
                    <hr>
                    <dd v-if="adjectives.length">
                        <h5 class="word-form">Adjective</h5>
                        <h6><b>Definition</b></h6>
                        <ol>
                            <li v-for="adjective in adjectives" v-bind:key="adjective" class="definitions">
                                <p><b>{{ adjective.definition }}</b></p>
                                <p v-if="adjective.examples"><u>Examples:</u></p>
                                <p v-for="sentence in adjective.examples" v-bind:key="sentence" class="sentences">
                                    <q>{{ sentence }}</q>
                                </p>
                                <dl>
                                    <dt class="syn-title" v-if="!adjective.synonyms">Synonyms</dt>
                                    <dd v-for="synonym in adjective.synonyms" v-bind:key="synonym" class="synonyms"> 
                                       <i>{{ synonym }}</i>
                                    </dd>
                                </dl>
                            </li>
                        </ol>
                    </dd>
                    <hr>
                    <dd v-if="adverbs.length">
                        <h5 class="word-form">Adverb</h5>
                        <h6><b>Definition</b></h6>
                        <ol>
                            <li v-for="adverb in adverbs" v-bind:key="adverb" class="definitions">
                                <p><b>{{ adverb.definition }}</b></p>
                                <p v-if="adverb.examples"><u>Examples:</u></p>
                                <p v-for="sentence in adverb.examples" v-bind:key="sentence" class="sentences">
                                    <q>{{ sentence }}</q>
                                </p>
                                <dl>
                                    <dt class="syn-title" v-if="adverb.synonyms"> Synonyms</dt>
                                    <dd v-for="synonym in adverb.synonyms" v-bind:key="synonym" class="synonyms"> 
                                       <i>{{ synonym }}</i>
                                    </dd>
                                </dl>
                            </li>
                        </ol>
                    </dd>
                </dl>
                <div style="height: 20vh"></div>
                <Footer></Footer>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Header from '@/components/Header'
    import SideBar from '@/components/SideBar'
    import Footer from '@/components/Footer'
    export default {
        name: 'Dictionary',
        components: {
            Header,
            SideBar,
            Footer,
        },
        data: function() {
            return {
                responseAPI: null,
                vocabulary: "",
            }
        },
        methods: {
            // Through WordAPI in RapidAPI to get vocabulary and its definition in JSON file
            searchForVocabulary: function(){
                fetch(`https://wordsapiv1.p.mashape.com/words/${this.vocabulary}`, {
                        headers: {
                            "X-Mashape-Key" : "281617bc6emsh04ab2c2b8a0287bp1fed9cjsn383c049e286a"
                        }
                    })
                    .then(response => response.json())
                    .then(json => this.responseAPI = json)
                },
            },
        computed: {
            syllables: function(){
                if (this.responseAPI !== null) {
                    if (this.responseAPI.hasOwnProperty("syllables")){
                        return this.responseAPI.syllables.list.join(" | ")
                    } else {
                        return "Not Found"
                    }
                } else {
                    return []
                }
            },
            pronunciation: function(){
                if (this.responseAPI !== null) {
                    return `/${this.responseAPI.pronunciation.all}/`
                } else {
                    return []
                }
            },
            nouns: function(){
                if (this.responseAPI !== null) {
                    return this.responseAPI.results.filter(word => word.partOfSpeech === "noun")
                } else {
                    return []
                }
            },
            verbs: function(){
                if (this.responseAPI !== null) {
                    return this.responseAPI.results.filter(word => word.partOfSpeech === "verb")
                } else {
                    return []
                }
            },
            adjectives: function(){
                if (this.responseAPI !== null) {
                    return this.responseAPI.results.filter(word => word.partOfSpeech === "adjective")
                } else {
                    return []
                }
            },
            adverbs: function(){
                if (this.responseAPI !== null) {
                    return this.responseAPI.results.filter(word => word.partOfSpeech === "adverb")
                } else {
                    return []
                }
            },
        }
    }
</script>
<style>
    .dictionary-title {
        text-align: center;
        margin: 30px;
        color: rgb(80, 180, 80);
    }

    .word-input-container {
        margin: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .word-input-container input {
        padding-left: 10px;
        border-radius: 3px;
        margin-right: 5px;
        box-shadow: 1px 1px 1px 1px rgb(152, 189, 152);
        border: solid 1px rgb(80, 180, 80);
    }

    .word-input-container input[type=button] {
        border-radius: 5px;
        color: white;
        font-weight: bold;
        box-shadow: 1px 2px 2px rgb(212, 206, 206);
        margin: 5px;
        outline: none;
        cursor: pointer;
        background: rgb(166, 209, 166);
        border: 1px solid rgb(173, 206, 173);
        background-repeat:no-repeat;
    }

    .word-input-container input[type=button]:hover {
        background: white;
        color: rgb(166, 209, 166);
    }

    .word-input-container input[type=button]:active {
        background-color: #93ad93;
        box-shadow: 0 2px rgb(114, 112, 112);
        transform: translateY(1px);
    }

    .syllables, .pron {
        color: rgb(15, 102, 15);
    } 

    .definitions p {
        color: black;
    }
    .word-form {
        color: rgb(58, 172, 58);
    }

    dd h6 {
       color: rgb(9, 77, 9); 
    }

    .definitions p b {
        color: rgb(11, 39, 13);
        font-weight: bold;
    }

    .syn-title {
        font-weight: 500;
        text-decoration: underline;
    }
    @media (min-width: 756px) {
        .big-container {
            padding-left: 200px;
            padding-right: 200px;
        }
    }
    
</style>