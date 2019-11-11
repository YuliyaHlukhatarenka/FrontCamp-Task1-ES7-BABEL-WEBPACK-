function errorOfImageLoading(e) {
    return "Image is not loaded";
}
class ErrorHandling {
    constructor(error) {
        this.error = document.createElement("div");
        this.error.className = "modal";
        this.message = document.createElement("p");
        const btn = document.createElement("span");
        btn.className = "close";
        btn.innerHTML = `&times`;
        btn.addEventListener('click', () => { this.error.style.display = 'none'; })
        this.error.appendChild(btn);

        this.error.appendChild(this.message);
        document.body.appendChild(this.error);
    }

    static getInstance(error) {
        if (this.instance === undefined) {
            this.instance = new ErrorHandling();
        };
        this.instance.message.innerHTML = `${error}`;
        this.instance.error.style.display = "block";
        return this.instance;
    }
}

export { errorOfImageLoading, ErrorHandling };