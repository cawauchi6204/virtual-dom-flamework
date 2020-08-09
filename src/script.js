$(function () {
    $(".js-account-item").each(function () {
        var $this = $(this);
        var $thisData = $this.data();
        if ($thisData.follow) {
            $this.find("js-follow-btn").addClass("isFollow")
        }
    })

    $(".js-follow-btn").on("click", function () {
        var $this = $(this);
        var $accountItem = $this.parents(".js-account-item")
        //ここで.をつけていなかったためエラーが発生
        var $thisData = $accountItem.data()
        //このdata()はdata属性を全て読み込む
        // 引数に名前(data-[この部分]を渡すことでその値を取得することができる)
        // 設定するにはdata('key名','値')とする

        if ($thisData.follow) {

            $this.removeClass("isFollow")
            $this.text("フォローする")
            $accountItem.data("follow", false)
        } else {
            $this.addClass("isFollow")
            $this.text("フォロー中")
            $accountItem.data("follow", true)
        }
    })
})
