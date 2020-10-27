window.FILL = (inputs) => {
	window.creative = new Creative(inputs);

	window.clickTag = inputs.link;
	document.querySelector('a').setAttribute('href', window.clickTag);
};

function Creative(inputs) {
	this.inputs = inputs;
	this.backgroundeEl = document.querySelector('.background');
	this.headlineEl = document.querySelector('.headline');
	this.modellEl = document.querySelector('.model');
	this.badgeEl = document.querySelector('.product__badge');
	this.priceEl = document.getElementById('price');
	this.countdownTextEl = document.querySelector('.countdown__description');
	this.countdownDateEl = document.getElementById('countdown');
	this.ctaEl = document.querySelector('.cta__inner');

	this.backgroundeEl.style.background = this.inputs.background;
	this.headlineEl.innerHTML = this.inputs.headline;
	this.modellEl.innerHTML = this.inputs.model;
	this.countdownTextEl.innerHTML = this.inputs.countdown_text;
	this.countdownDateEl.innerHTML = this.inputs.countdown_date;
	this.ctaEl.innerHTML = this.inputs.cta;

	if (this.inputs.badge === 'Ano') {
		this.badgeEl.style.display = 'flex';
	} else {
		this.badgeEl.style.display = 'none';
	}

	document.querySelector('[data-product-price]').innerHTML = this.inputs.price;

	document.querySelector('.product').style.backgroundImage = `url("${this.inputs.image_link}")`;

	if (!document.querySelector('.product').style.backgroundImage.length) {
		throw new Error('Image is not inserted into template');
	}
}

