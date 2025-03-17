document.getElementById('generate').addEventListener('click', async function() {
    const prompt = document.getElementById('prompt').value;
    const button = this;
    const resultImage = document.getElementById('generated-image');

    // 禁用按钮并显示加载状态
    button.disabled = true;
    button.textContent = '生成中...';

    try {
        const response = await fetch('/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt: prompt })
        });

        const data = await response.json();

        if (data.image) {
            resultImage.src = data.image;
            resultImage.style.display = 'block';
        }
    } catch (error) {
        alert('生成失败，请重试');
    } finally {
        button.disabled = false;
        button.textContent = '生成图片';
    }
});