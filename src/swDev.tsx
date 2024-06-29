export default function swDev(){
  let url=`/${process.env.PUBLIC_URL}/sw.ts`
  navigator.serviceWorker.register(url).then(res=>{
    console.log("service",res)
  })
}