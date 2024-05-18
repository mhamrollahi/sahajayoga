import gravatar from 'gravatar'

export default function userGravatar(email,options=null){
    return gravatar.url(email,options)
}