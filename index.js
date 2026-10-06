import { printError, printHelp, printSuccess } from './services/log.service.js'
import getArgs from './helpers/args.js'
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js'
import { getWeather } from './services/api.service.js'

const saveToken = async token => {
    if (!token.length) {
        printError("Token doesn't exist")
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSuccess('Token was saved')
    } catch (error) {
        printError(error.message)
    }
}

const getForecast = async () => {
    try {
        await getWeather('Khiva')
    } catch (error) {
        printError(error.message)
    }
}

const startCli = () => {
    const args = getArgs(process.argv)

    if (args.h) {
        return printHelp()
    }
    if (args.s) {
        //save city
    }
    if (args.t) {
        return saveToken(args.t)
    }
    return getForecast()
}

startCli()