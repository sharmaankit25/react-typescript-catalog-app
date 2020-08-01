import catalog from '../static/catalog.json'
export default {
    async fetch_Locations () {
        try{
            return new Promise(function(resolve, reject) {
                // Setting 2000 ms time
                setTimeout(resolve, 2000);
            }).then(function() {
                return catalog.data
            });
        }catch(err){
            console.log(err)
        }
    }
}
