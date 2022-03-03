import { 
    construct, 
    options, 
    elementDom,
    value 
} from './type';

'use strict';

export default class Etiquettes {

    public token      : string 
    public elementsDom: elementDom
    public values     : value 
    public status     : string 
    public isLoad     : boolean 

    constructor(public obj :construct){
        this.status = 'urlBeta'
        this.token = obj.token
        this.values = {
            dpe: null,
            ges: null
        }
        this.elementsDom = {
            dpe: null,
            ges: null
        }
        this.isLoad = false
    }

    private async load(){
        let color = '#646e77'
        let svg = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330.9 258.7" enable-background="new 0 0 0 0" xml:space="preserve">
            <g transform="translate(126,80)">
                <circle fill="${color}" stroke="none" cx="6" cy="50" r="6">
                <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate>    
                </circle>
                <circle fill="${color}" stroke="none" cx="26" cy="50" r="6">
                <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate>       
                </circle>
                <circle fill="${color}" stroke="none" cx="46" cy="50" r="6">
                <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate>     
                </circle>
            </g>
        </svg>`
        await this.sleep(1000)
        if(!this.isLoad){            
            this.elementsDom.dpe ? this.elementsDom.dpe.innerHTML = svg : null
            this.elementsDom.ges ? this.elementsDom.ges.innerHTML = svg : null
        }
    }

    public start(){
        this.elementsDom.dpe = document.querySelector('[etiquette-dpe]')
        this.elementsDom.ges = document.querySelector('[etiquette-ges]')

        this.values.dpe = parseInt(
            document.querySelector('[value-dpe]')
                    .getAttribute("value-dpe"))

        this.values.ges = parseInt(
            document.querySelector('[value-ges]')
                    .getAttribute("value-ges"))

        this.requestApi(); 

    }

    public get(obj :options){
        this.elementsDom.dpe = document.querySelector(obj.dpe)
        this.elementsDom.ges = document.querySelector(obj.ges)

        this.values.dpe = obj.valueDpe
        this.values.ges = obj.valueGes

        this.requestApi(); 
    }

    private makeUrl(){
        let url:any = {
            urlLocal : 'http://etiquette_dpe.test',
            urlBeta  : 'https://beta.etiquettes.immo',
            urlProd  : 'https://etiquettes.immo'
        }
    
        return `${url[this.status]}/api/etiquette?value_dpe=${this.values.dpe}&value_ges=${this.values.ges}`
    }

    private makeDom(json:any){
        this.isLoad = true
        this.elementsDom.dpe ? this.elementsDom.dpe.innerHTML = json.svgdpe : null
        this.elementsDom.ges ? this.elementsDom.ges.innerHTML = json.svgges : null
    }

    private async requestApi(){

        this.load()
        
        let response = await fetch(this.makeUrl(),{
            method: 'get',
            mode: 'cors', // no-cors, *cors, same-origin
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            }
        })
        let etiquetteJson = await response.json();

        this.makeDom(etiquetteJson)

    }

    private sleep(milliseconds:number){
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
}

// module.exports = {Etiquettes}