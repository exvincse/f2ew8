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
          <i v-if="item.val.type === 'pdf'" class="fas fa-file-pdf fa-5x"></i>
          <i v-else-if="item.val.type === 'zip' || item.val.type === 'rar'" class="fas fa-file-archive fa-5x"></i>
          <i v-else class="far fa-folder-open fa-5x"></i>
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
      this.$firebase.database().ref('/file').on('value',(data) => {
        this.totaldata = [];
        if (data.val() === null) return false;
        let key = Object.keys(data.val());
        let val = Object.values(data.val());
        key.forEach((item, index) => {
          if (val[index].star === true) {
            this.totaldata.push({
              key: item,
              val: val[index],
            });
          }
        });
        return true;
      });
    },
    removestar(item) {
      this.$firebase.database().ref(`file/${item.key}`).update({
        star: false,
      });
      this.stardata();
    },
  },
}
</script>