<template>
    <div >
<div
          class="mt-2 overflow-y-auto"
          v-scroll:#scroll-target="onScroll"
          id="scroll-target"
          style="max-height: 930px">
        <v-card flat class="primary pa-3" v-for="(item, i ) in news.slice(0, 15)" :key="i">
            <v-card flat class="primary pa-1 ma-1" :href="item.url">
                <div class="card">
                <v-img v-if="item.urlToImage" :src="item.urlToImage" class="img rounded-lg"></v-img>
                <v-img v-else src="https://techsmagic.com/wp-content/uploads/2021/02/webcam-not-working.jpg"
                        class="img rounded-lg" />
                {{item.imagens}}
                    <v-card class="titles primary">
                        <h5 class="text font-weight-light white--text">
                            {{item.title}}
                        </h5>
                        <div class="sub white--text d-flex flex-column">
                            {{item.publishedAt}} <br/>
                            {{item.author}}
                        </div>
                    </v-card>
                </div>
           </v-card>
        </v-card>
</div>
    </div>
</template>
<script>
import axios from 'axios'
export default { 
data() { 
    return { 
        news: ''
    }
},
methods: { 
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
    },
},
async mounted() { 
await axios.get('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json').then(
    (resp) => { 
console.log('news', resp.data.articles)
this.news = resp.data.articles
console.log("newssss: ", this.news)
    }
) 
}
}
</script>
<style scoped>
.card { 
    width: 100%;
    cursor: pointer;
    filter: brightness(90%);
    transition: all 0.4s ease;
}
.card:hover { 
filter: brightness(110%);
transform: scale(1.02);
}
.img { 
    transition: 0.2s;
    object-fit: contain;
    max-height: 140px;
}
.titles { 
    margin-top: -18px;
    margin-right: 14px;
    margin-left: 15px;
    min-height: 80px;
    padding: 5px;
}

.text { 
    font-size: 11px;
}
.sub {
    font-size: 7px;
    position: absolute;
    bottom: 5px;
    right: 5px;
}
</style>