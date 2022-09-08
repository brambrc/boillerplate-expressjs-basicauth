var Moment = require('moment');

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

const DateFormat = {

    formatMoment(date) {
        
      Moment.locale('en');

      Moment.updateLocale('en', {
	      relativeTime: {
	        future: "in %s",
	        past:   "%s ago",
	        s:  "second",
	        m:  "1 minute",
	        mm: "%d minutes",
	        h:  "1 hour",
	        hh: "%d hours",
	        d:  "1 day",
	        dd: "%d days",
	        M:  "1 month",
	        MM: "%d months",
	        y:  "1 year",
	        yy: "%d years"
	      }
	    });

  		var dateNow = Moment().format('YYYY-MM-DD HH:mm:ss');
  		var dateFrom = date;

  		var a = Moment(dateNow);//now
  		var b = Moment(dateFrom);

  		var interval = a.diff(b, 'days');

  		if(interval > 11){
  			var resDate = Moment(date).format('D MMM YYYY');
  			var resHour = Moment(date).format('HH:mm');

  			return resDate+', '+resHour+' WIB';
  		}else{
  			return Moment(date).fromNow();	
  		}
    },

    formatDate(date) {
    	const d = new Date(date);
    	const finalDate = ('0'+d.getDate()).slice(-2)+' '+months[d.getMonth()]+' '+d.getFullYear();
    	const finalTime = ('0'+d.getHours()).slice(-2)+':'+('0'+d.getMinutes()).slice(-2);

    	const ret = {'date':finalDate, 'time':finalTime}

    	return ret;
    },

    formatDateTime(date) {
      const d = new Date(date);
      const finalDate = d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2);
      const finalTime = ('0'+d.getHours()).slice(-2)+':'+('0'+d.getMinutes()).slice(-2)+':'+('0'+d.getSeconds()).slice(-2);

      return finalDate+' '+finalTime;
    },

    formatDateRead(date) {
      const d = new Date(date);
      const finalDate = ('0'+d.getDate()).slice(-2)+' '+months[d.getMonth()]+' '+d.getFullYear();

      return finalDate;
    },

    formatDateTimeRead(date) {
      const d = new Date(date);
      const finalDate = ('0'+d.getDate()).slice(-2)+' '+months[d.getMonth()]+' '+d.getFullYear();
      const finalTime = ('0'+d.getHours()).slice(-2)+':'+('0'+d.getMinutes()).slice(-2)+':'+('0'+d.getSeconds()).slice(-2);

      return finalDate+' '+finalTime+' WIB';
    },

    dateNow() {
    	const d = new Date();
    	const finalDate = d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2);

    	return finalDate
    },

    dateTimeNow() {
    	const d = new Date();
    	const finalDate = d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2);
    	const finalTime = ('0'+d.getHours()).slice(-2)+':'+('0'+d.getMinutes()).slice(-2)+':'+('0'+d.getSeconds()).slice(-2);

    	return finalDate+' '+finalTime;
    }
}

module.exports = DateFormat;