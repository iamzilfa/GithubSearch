// export class User {
//     constructor(public avatar_url:string, public name:string, public login:string, public public_repos:number){}
// }

export class User {
    static result: any;
    constructor(public avatar_url: string, public name: string, public login: string, public public_repos: number, public followers: number, public following: number, public created_at: Date, public html_url: string) { }
}