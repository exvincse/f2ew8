<template>
  <div class="text-white p-4 right-bg" style="min-height:100vh">
    <div class="d-flex flex-wrap folder-wrap">
      <div class="d-flex flex-column file text-white text-center"
        v-for="item in totaldata" :key="item.key">
        <div class="text-center p-3">
          <div class="file-choose mb-3 d-flex">
            <a href="#" class="file-menu-click"
              @click.prevent="removestar(item)">
              <img src="../assets/img/icon-star-active.svg" alt="">
            </a>
          </div>
          <div class="star-pos">
            <i v-if="item.val.type === 'pdf'" class="fas fa-file-pdf fa-5x"></i>
            <i v-else-if="item.val.type === 'zip' || item.val.type === 'rar'" class="fas fa-file-archive fa-5x"></i>
            <i v-else class="far fa-folder-open fa-5x"></i>
            <a href="#" class="star-link" @click.prevent="starlink(item)"></a>
          </div>
        </div>
        <span>{{item.val.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totaldata: [],
    };
  },
  created() {
    this.stardata();
  },
  methods: {
    stardata() {
      this.$firebase.database().ref('/star').on('value',(data) => {
        this.totaldata = [];
        if (data.val() === null) return false;
        let key = Object.keys(data.val());
        let val = Object.values(data.val());
        key.forEach((item, index) => {
          this.totaldata.push({
            key: item,
            val: val[index],
          });
        });
        return true;
      });
    },
    removestar(item) {
      this.$firebase.database().ref(`${item.val.path}`).update({
        star: false,
      });
      this.$firebase.database().ref(`/star/${item.key}`).remove();
      this.stardata();
    },
    starlink(item) {
      // this.$router.push({
      //   path: '/index',
      //   query: {
      //     path: item.val.path,
      //   }
      // });
    }
  },
}
</script>