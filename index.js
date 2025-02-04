// Об'єкт bankAccount
const bankAccount = {
    ownerName: "Ім'я Користувача",
    accountNumber: "123456789",
    balance: 1000,
    deposit(amount) {
        this.balance += amount;
        alert(`Поповнено на ${amount}. Залишок: ${this.balance}`);
    },
    withdraw(amount) {
        if (amount > this.balance) {
            alert("Недостатньо коштів");
        } else {
            this.balance -= amount;
            alert(`Знято ${amount}. Залишок: ${this.balance}`);
        }
    }
};

document.getElementById("depositBtn").addEventListener("click", () => {
    const amount = Number(document.getElementById("amount").value);
    bankAccount.deposit(amount);
});

document.getElementById("withdrawBtn").addEventListener("click", () => {
    const amount = Number(document.getElementById("amount").value);
    bankAccount.withdraw(amount);
});

// Об'єкт weather
const weather = {
    temperature: 0,
    humidity: 50,
    windSpeed: 10,
    isBelowZero() {
        return this.temperature < 0;
    }
};

document.getElementById("checkWeatherBtn").addEventListener("click", () => {
    weather.temperature = Number(document.getElementById("temperatureInput").value);
    if (weather.isBelowZero()) {
        alert("Температура нижче 0 градусів Цельсія");
    } else {
        alert("Температура вище або рівна 0 градусів Цельсія");
    }
});

// Об'єкт user
const user = {
    name: "",
    email: "",
    password: "",
    login(inputEmail, inputPassword) {
        if (this.email === inputEmail && this.password === inputPassword) {
            alert("Вхід успішний");
        } else {
            alert("Невірний email або пароль");
        }
    }
};

document.getElementById("loginBtn").addEventListener("click", () => {
    user.email = document.getElementById("emailInput").value;
    user.password = document.getElementById("passwordInput").value;
    const inputEmail = document.getElementById("emailCheck").value;
    const inputPassword = document.getElementById("passwordCheck").value;
    user.login(inputEmail, inputPassword);
});

// Об'єкт movie
const movie = {
    title: "Інтерстеллар",
    director: "Крістофер Нолан",
    year: 2014,
    rating: 8.6,
    isHighRated() {
        return this.rating > 8;
    }
};

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("movieTitle").textContent = movie.title;
    document.getElementById("movieDirector").textContent = movie.director;
    document.getElementById("movieYear").textContent = movie.year;
    document.getElementById("movieRating").textContent = movie.rating;
    
    if (movie.isHighRated()) {
        document.getElementById("movieTitle").style.color = "green";
    }
});
