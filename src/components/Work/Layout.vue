<template>
    <div class="layout">
        <svg @click="grid" class="fill" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink" 
            width="15" 
            height="15" 
            viewBox="0 0 15 15">
            <defs><path id="grid" d="M1129 329h6.033v5.929H1129zm8.946 0H1144v6.012h-6.054zm-8.946 8.905h6.012V344H1129zm8.967 0H1144V344h-6.033z"/>
            </defs><g><g transform="translate(-1129 -329)"><use fill="#737373" xlink:href="#grid"/></g></g></svg>

        <svg @click="list" class="fill"
            xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink" 
            width="15" 
            height="15" 
            viewBox="0 0 15 15">
            <defs><path id="list1" d="M1154 341h15v3h-15z"/><path id="list2" d="M1154 334.969h15V338h-15z"/><path id="list" d="M1154 328.969h15V332h-15z"/>
            </defs><g><g transform="translate(-1154 -329)"><use fill="#737373" xlink:href="#list1"/></g><g transform="translate(-1154 -329)">
            <use fill="#737373" xlink:href="#list2"/></g><g transform="translate(-1154 -329)"><use fill="#737373" xlink:href="#list"/></g></g></svg>
    </div>
</template>

<script>
export default {
    name: 'Layout',
    methods: {
    list() {
      var list = document.getElementById("layout");
      list.classList.remove("grid-layout");
      list.classList.add("list-layout");
    },
    grid() {
      var grid = document.getElementById("layout");
      grid.classList.remove("list-layout");
      grid.classList.add("grid-layout");
    }
  },
}
</script>

<style>
    .layout {
        float: right;
    }
    .layout svg {
        margin-left: 9px;
        cursor: pointer;
    }
    .layout svg:hover #grid,
    .layout svg:hover #list,
    .layout svg:hover #list1,
    .layout svg:hover #list2 {
        fill: #2ecc71;
    }
    
</style>
