import moment from 'moment'

const currentWeekLabels = [moment().startOf('week').format('YYYY-MM-DD'), moment().startOf('isoweek').format('YYYY-MM-DD'), moment().startOf('week').add(2, 'days').format('YYYY-MM-DD'),
    moment().startOf('week').add(3, 'days').format('YYYY-MM-DD'), moment().startOf('week').add(4, 'days').format('YYYY-MM-DD'),
    moment().startOf('week').add(5, 'days').format('YYYY-MM-DD'), moment().endOf('week').format('YYYY-MM-DD')];


const currentWeekDates = (state = currentWeekLabels, action) => state;


export default currentWeekDates;