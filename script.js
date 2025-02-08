// 恋爱计时器
function updateLoveTimer() {
    const startTime = new Date('2024-01-01'); // 恋爱开始时间
    const now = new Date();
    const diff = now - startTime; // 计算时间差

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('timer').textContent = `${days}天 ${hours}小时 ${minutes}分钟`;
}

// 更新天气与日期（可以通过API来实现）
function updateWeather() {
    const today = new Date();
    document.getElementById('today-date').textContent = today.toLocaleDateString();

    // 假设这里返回的是一个天气API的数据
    document.getElementById('today-weather').textContent = '晴 22°C';
}

// 添加留言到留言板
function addNote() {
    let noteText = document.getElementById("note-input").value;
    let noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    noteDiv.innerText = noteText;
    document.getElementById("note-display").appendChild(noteDiv);
    document.getElementById("note-input").value = "";
}

// 启动语音录制
function startRecording() {
    alert("开始录音..."); // 实际录音逻辑可以使用Web Audio API或其他库实现
}

// 播放留言
function playMessage() {
    alert("播放语音留言...");
}

// 切换像素画板显示
function togglePixelArt() {
    let board = document.getElementById('pixel-art-board');
    board.style.display = (board.style.display === 'none') ? 'block' : 'none';
}

// 初始化
updateLoveTimer();
updateWeather();