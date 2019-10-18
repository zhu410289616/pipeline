<template>
    <div id="date-time">
        {{ date | formatDate }}
    </div>
</template>

<script>

//使用vue在html上显示当前时间
//https://blog.csdn.net/piano9425/article/details/89212393

// 首先编写一个padDate函数,用于将小于0的数,转换成0a的形式
var padDate = function (value){
    return value < 10?  "0" + value : value
}
// 下面编写formatDate函数. 用于转换日期格式
var formatDateFunction = function(value) {
    var date = new Date(value);
    var year = date.getFullYear();   // 获取年份
    var month = padDate(date.getMonth()+1);  // js里面月份(0~11月)会比正常的少1; 使用padDate函数转换小于10的月份
    var day = padDate(date.getDate());
    var hours = padDate(date.getHours());
    var minutes = padDate(date.getMinutes());
    var seconds = padDate(date.getSeconds());
    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
}

  export default {
    name: "DateTime",
    el: "#date-time",
    data() {
        return {
            date: new Date()
        }
    },
    filters: {
        formatDate:formatDateFunction
    },
    methods: {

    },
    mounted: function() {
        var _this = this;
        this.timer = setInterval(function() {
            _this.date = new Date();
        }, 1000);
    },
    beforeDestory: function() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
  }
</script>

<style>
  .date-info {
    float: right;
    padding-right: 30px;
    & > * {
        display: inline-block;
        vertical-align: middle;
    }
    .date-info__left {
        font-size: 64px;
        margin-right: 5px;
    }
    .date-info__right {
        font-size: 20px;
        line-height: 1.5em;
    }
  }
</style>
