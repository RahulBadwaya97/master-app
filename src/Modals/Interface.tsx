export interface InputInterface {
    label:string,
    type:string,
    name:string,
    placeholder:string,
    required:boolean,
    handleChange:Function,
    value:any
} 

export interface LabelInterface {
    label:string,
    required:boolean
}
export interface ButtonInterface {
    children:any,
    requestPath:string,
    ocClick:Function,
    disable:boolean

}