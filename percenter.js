var Percent = function(selector) {
    this.form = $(selector);
    this.container = this.form.find('.hundred-percent');
    this.percent = this.form.find('.percent');
    this.cursor = this.form.find('.cursor');
    this.ratingInput = this.form.find('[name=rating]');
    this.ratingInfo = $('<span class="rating-info"></span>');
    this.containerWidth = parseInt(this.container.css('width'));

    this.rating = false;
    this.marginLeft = this.container.offset().left;

    this.red = '#ff3030';
    this.green = '#76ee00';


    this.form.after(this.ratingInfo);
    this.setValue();

    this.container.mousedown(this.onMouseDown.bind(this));
    this.container.mousemove(this.onMouseMove.bind(this));
    this.container.mouseleave(this.onMouseLeave.bind(this));
    this.container.mouseup(this.onMouseUp.bind(this));

    this.form.submit(this.submitRating.bind(this));

    this.ratingInfo.on('click', '.change-note a', this.rateAgain.bind(this));
}

Percent.prototype.setValue = function () {
    var value = parseInt(this.percent.css('width'));
    value = Math.round((value/this.containerWidth) * 100);
    this.checkColor(value);
    this.ratingInput.val(value);
};

Percent.prototype.checkColor = function (value) {
    if (value < 50) {
        this.percent.css('backgroundColor', this.red)
        this.cursor.css('backgroundColor', this.red)
    } else {
        this.percent.css('backgroundColor', this.green);
        this.cursor.css('backgroundColor', this.green);
    }
};

Percent.prototype.getPosition = function (e) {
    var mouseX = e.clientX;
    return mouseX-this.marginLeft;
};

Percent.prototype.setWidth = function (e) {
    var position = this.getPosition(e);
    if (position < 0) position = 0;
    if (position > this.containerWidth) position = this.containerWidth;
    this.percent.css('width', position+'px');
};

Percent.prototype.onMouseDown = function (e) {
    this.rating = true;
    this.setWidth(e);
};

Percent.prototype.onMouseMove = function (e) {
    if (this.rating) this.setWidth(e);
};

Percent.prototype.onMouseLeave = function (e) {
    if (this.rating) this.onMouseUp(e);
};

Percent.prototype.onMouseUp = function (e) {
    this.rating = false;
    this.setWidth(e);
    this.setValue();
};

Percent.prototype.submitRating = function (e) {
    e.preventDefault();
    $.post(this.form.attr('action'), this.form.serialize(), function(data) {
        this.form.hide();
        this.ratingInfo.append(data);
    }.bind(this));
};

Percent.prototype.rateAgain = function (e) {
    e.preventDefault();
    this.ratingInfo.html('');
    this.form.show();
};

Percent.prototype.changeRed = function (color) {
    this.red = color;
};

Percent.prototype.changeGreen = function (color) {
    this.green = color;
};

// INIT
function rate(selector) {
    var forms = $(selector);
    var raters = [];
    for (let form of forms) {
        raters.push(new Percent(form));
    }
    return raters;
}

$(function(){
    var raters = rate('.percent-form');
});
