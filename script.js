document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    // Отправка данных на сервер
    fetch('https://api.telegram.org/bot7720717498:AAEYEa3gsPiKas4xYX4ft0g-nBpkROa9Mz0/sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: '965828266', // Замените на ваш chat_id
            text: `Имя: ${data.name}\nEmail: ${data.email}\nСообщение: ${data.message}`
        })
    })
    .then(response => {
        if (response.ok) {
            alert('Сообщение отправлено!');
            this.reset(); // Очищаем форму
        } else {
            alert('Произошла ошибка при отправке сообщения.');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке сообщения.');
    });
});
