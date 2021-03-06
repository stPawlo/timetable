module.exports = (msg) => {
    const text = msg.text

    if (/\/clear/i.test(text)) {
        bot.sendMessage(msg.chat.id, 'cleared', {
            reply_markup: {
                remove_keyboard: true
            }
        })
    }

    if (/\/time/i.test(text)) {
        bot.sendMessage(msg.chat.id, moment().format('MMMM Do YYYY, h:mm:ss a'), {
            reply_markup: {
                remove_keyboard: true
            }
        })
    }

    if (/\/start/i.test(text)) {
        let day = moment().day()
        let params = { week: currentWeek, day: day }
        let schedule = getSchedule(params)
        let options = {
            reply_markup: getKeyboard(params),
            parse_mode: 'html'
        }
        bot.sendMessage(msg.chat.id, schedule, options)
    }
}