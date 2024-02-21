function scrollThroughElement() {
	let nodeActionBtn = document.querySelector("#main__action-btn")
	let nodeSelectBurger = document.querySelector("#main__select-burger")
	let nodeNavLinks = document.querySelectorAll(".header__link")
	let nodeMainBtnBurgerCard = document.querySelectorAll(".main__btn_burger-card")

	for (let i = 0; i < nodeMainBtnBurgerCard.length; i++) {
		nodeMainBtnBurgerCard[i].onclick = function () {
			document.getElementById("main__order-placement").scrollIntoView({behavior: "smooth"})
		}
	}

	for (let i = 0; i < nodeNavLinks.length; i++) {
		nodeNavLinks[i].onclick = function () {
			document.getElementById(nodeNavLinks[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"})
		}
	}

	function scrollElem() {
		nodeSelectBurger.scrollIntoView({behavior: "smooth"})
	}

	nodeActionBtn.addEventListener("click", scrollElem)
}

document.addEventListener("DOMContentLoaded", scrollThroughElement)

function inputValidation() {
	const mainForm = document.getElementById("main__form");
	const inputUserOrder = mainForm.querySelector("#main__user-order");
	const inputUserName = mainForm.querySelector("#main__user-name");
	const inputUserPhone = mainForm.querySelector("#main__user-phone");
	const orderButton = mainForm.querySelector("#main__order-action");
	const mainInputs = [inputUserOrder, inputUserName, inputUserPhone];

	function checkValidation() {
		let hasError = false
		mainInputs.forEach(item => {
			if (!item.value.trim()) {
				item.parentElement.style.background = "red"
				hasError = true
			} else {
				item.parentElement.style.background = ""
			}
		})
		if (!hasError) {
			mainInputs.forEach(item => {
				item.value = ""
				item.parentElement.style.background = ""
			})
			alert("Ваш заказ в обработке, ожидайте звонка!")
		}
	}

	orderButton.addEventListener("click", checkValidation)
	orderButton.addEventListener("click", function (e) {
		e.preventDefault()
	})
}

document.addEventListener("DOMContentLoaded", inputValidation)

function changeCurrency(e) {
	let currentCurrency = e.target.innerText
	let newCurrency = "$"
	let coefficient = 1
	let price = document.getElementsByClassName("main__price")

	function getChangeCurrency() {
		if (currentCurrency === "$") {
			newCurrency = "₽"
			coefficient = 91
		} else if (currentCurrency === "₽") {
			newCurrency = "BYN"
			coefficient = 3
		} else if (currentCurrency === "BYN") {
			newCurrency = "KZT"
			coefficient = 450
		} else if (currentCurrency === "KZT") {
			newCurrency = "TRY"
			coefficient = 30
		} else if (currentCurrency === "TRY") {
			newCurrency = "AED"
			coefficient = 4
		}
		e.target.innerText = newCurrency

		for (let i = 0; i < price.length; i++) {
			price[i].innerText = +(price[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency
		}
	}

	getChangeCurrency();
}

document.addEventListener("DOMContentLoaded", function () {
	let currency = document.getElementById("header__change-currency")

	currency.addEventListener("click", changeCurrency);
});

