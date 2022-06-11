const { Client } = require('discord.js')

const { readdirSync, readdir } = require('fs')

module.exports = class extends Client {
    constructor (options){
        super(options)

        this.commands = []
    }
     
    loadCommands(patch = 'src/commands') {
        const categories = readdirSync(patch)

        for(const category of categories){
            const commands = readdirSync(`${path}/${category}`)

            for(const command of commands){
                const commandClass = require()
                const cmd = new ()
            }
        }
    }
}