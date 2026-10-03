import {printError, printHelp, printSuccess} from './services/log.service.js'
import getArgs from './helpers/args.js'
import { saveKeyValue } from './services/storage.service.js'

const saveToken =async token => {
    try {
        await saveKeyValue('token', token)
        printSuccess('Token was saved')
    } catch (error) {
        printError(error.message)
    }
}

const startCli = () => {
    const args = getArgs(process.argv)
    
console.log(args)
    if (args.h) {
        printHelp()
        //help
    }
    if (args.s){
        //save city
    }
    if (args.t){
        return saveToken(args.t)
        //save token
    }
    //reult
}

startCli()