import PromptSync from "prompt-sync";

const prompt = PromptSync();

// user list
const users_list: string[] = [
    "mujtaba", "asad ali", "murtaza"
]

// user password
const user_password_data:string[] = [
    "mujtaba1234","asad1234","murtaza1234",
];

const user_name = prompt("Enter your name: ");

const user_password = prompt(`${user_name} enter your password: `);
if (users_list.includes(user_name.toLocaleLowerCase())) {
    console.log(`wellcome: \n${user_name}`);
    
} else(users_list!.includes(user_name)); {
    console.log("It seems you are new here please create a new account");
}

if(users_list.includes(user_name.toLocaleLowerCase()) && user_password_data.includes(user_password.toLocaleString())){
    console.log(`logged in ${user_name} with password ${user_password}`);
    
}else{
    console.log('sorry');
    
}