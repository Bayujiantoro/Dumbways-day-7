class Testimonial {
    constructor(quote, image) {
        this._quote = quote
        this._image = image
    }

    get quote() {
        return this._quote
    }

    get image() {
        return this._image
    }

    get html() {
        return `<div class="testimonial">
            <img src="${this.image}" class="profile-testimonial" />
            <p class="quote">"${this.quote}"</p>
            <p class="author">- ${this.author}</p>
        </div>`
    }
}

class AuthorTestimonial extends Testimonial {
    constructor(author, quote, image) {
        super(quote, image)
        this._author = author
    }

    get author() {
        return this._author
    }
}

class CompanyTestimonial extends Testimonial {
    constructor(company, quote, image) {
        super(quote, image)
        this._company = company
    }

    get author() {
        return this._company + " Company"
    }
}

const testimonial1 = new AuthorTestimonial("Jihyo-twice", "Mantap, keren banget jasanya", "assets/images/jihyo.jpg")

const testimonial2 = new AuthorTestimonial("Nancy-Momoland", "oke sih, oke lah", "assets/images/nancy2.jpg")

const testimonial3 = new CompanyTestimonial("Blackpink", "Gege gaming!", "assets/images/blackpink.jpg")

let testimonialData = [testimonial1, testimonial2, testimonial3]
let testimonialHTML = "";

for (let i = 0; i < testimonialData.length; i++) {
    testimonialHTML += testimonialData[i].html
}

document.getElementById("testimonials").innerHTML = testimonialHTML


