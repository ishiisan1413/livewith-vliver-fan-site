document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    let currentIndex = 0; // 現在表示中の画像のインデックス

    // 画像を切り替える関数
    function changeImage(index) {
        // 現在の画像を非表示にする（アニメーションのため）
        mainImage.style.opacity = 0;

        // 100ms後に新しい画像に切り替える
        setTimeout(() => {
            const newImageSrc = thumbnails[index].getAttribute('data-full');
            mainImage.src = newImageSrc;
            mainImage.style.opacity = 1;

            // アクティブなサムネイルを更新
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            thumbnails[index].classList.add('active');
        }, 100);
    }

    // 次の画像に切り替える関数
    function nextImage() {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        changeImage(currentIndex);
    }

    // 各サムネイルにクリックイベントを設定
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function() {
            // クリックされたサムネイルのインデックスを現在のインデックスとして設定
            currentIndex = index;
            changeImage(currentIndex);
        });
    });

    // 初期表示時に最初のサムネイルをアクティブにする
    thumbnails[0].classList.add('active');

    // 10秒ごとに画像を自動で切り替える
    setInterval(nextImage, 10000); // 10000ミリ秒 = 10秒
});
