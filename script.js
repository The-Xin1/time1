document.addEventListener('DOMContentLoaded', function() {
    // 获取时钟元素
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');
    const digitalTime = document.querySelector('.time');
    const dateDisplay = document.querySelector('.date');
    
    // 更新时钟函数
    function updateClock() {
        const now = new Date();
        
        // 获取时、分、秒
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        
        // 计算指针角度
        const hourDeg = (hours % 12) * 30 + minutes * 0.5; // 每小时30度，每分钟0.5度
        const minuteDeg = minutes * 6; // 每分钟6度
        const secondDeg = seconds * 6; // 每秒6度
        
        // 设置指针旋转
        hourHand.style.transform = `translate(0, -50%) rotate(${hourDeg}deg)`;
        minuteHand.style.transform = `translate(0, -50%) rotate(${minuteDeg}deg)`;
        secondHand.style.transform = `translate(0, -50%) rotate(${secondDeg}deg)`;
        
        // 更新数字时钟
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
        digitalTime.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        
        // 更新日期
        const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
        
        const day = days[now.getDay()];
        const month = months[now.getMonth()];
        const date = now.getDate();
        
        dateDisplay.textContent = `${day}, ${month}${date}日`;
    }
    
    // 初始更新时钟
    updateClock();
    
    // 每秒更新时钟
    setInterval(updateClock, 1000);
    
    // 添加卡通效果
    function addCartoonEffects() {
        // 随机颜色变化
        const clockFace = document.querySelector('.clock-face');
        const colors = ['#ff9800', '#4caf50', '#2196f3', '#e91e63', '#9c27b0'];
        
        setInterval(() => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            clockFace.style.borderColor = randomColor;
            
            // 更新卡通元素颜色
            document.documentElement.style.setProperty('--cartoon-color', randomColor);
        }, 10000); // 每10秒变换一次颜色
    }
    
    // 初始化卡通效果
    addCartoonEffects();
});