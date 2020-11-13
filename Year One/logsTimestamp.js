var Logger = function() {
    this.log = {};
};

Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (timestamp === undefined || message === undefined) {
        return null;
    }
    message = message.replace(/ /g,'');
    if (this.log[message] === undefined) {
        this.log[message] = timestamp;
        return true;
    } else {
        if (timestamp - this.log[message] >= 10) {
            this.log[message] = timestamp;
            return true;
        } else {
            return false;
        }
    }
};