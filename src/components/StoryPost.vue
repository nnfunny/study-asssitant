<template>
    <div>
        <div class="choosing-field">
            <strong>Choose a story </strong>
            <select v-model="storyTitle">
                <option
                    v-for="title in titles"
                    v-bind:key="title"
                    class="story-option"
                >
                    {{ title }}
                </option>
            </select>
        </div>
        <div class="chosen-story">
            <h3 class="story-title">{{ storyTitle }}</h3>
            <div v-html="content" class='story-content'></div>   
        </div>
    </div>
</template>

<script>
import { stories } from '../mixins/stories'
export default {
    mixins: [stories],
    name: 'StoryPost',
    data: function(){
        return {
            storyTitle: null,
            selectedStory: 'Hello',
        }
    },
    computed: {
        content: function() {
            // Get the index of title in "titles" array  
            let titleIndex = this.titles.indexOf(this.storyTitle)

            // Return the corresponding content
            return this.contents[titleIndex]
        }
    }
}
</script>
<style>
    .choosing-field {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
    }
    .choosing-field strong {
        color: rgb(128, 192, 147);
        margin-right: 20px;
    }

    .story-title {
        text-align: center;
        color: rgb(80, 180, 80);
        margin-bottom: 20px;
    }

    .story-content p {
        color: rgb(73, 72, 72);
    }

    .story-content span {
        font-weight: bold;
        float: right;
        margin-right: 10px;
    }
</style>