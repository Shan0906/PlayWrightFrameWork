import fs from "fs";
import {parse} from "csv-parse/sync";

export class dataProvider
{

static getdatadfromjson(filepath)
{
     let jsondata=JSON.parse(fs.readFileSync(filepath,"utf-8"));
     return jsondata;
}

static getdatadfromcsv(filepath)
{
          let csvdata=parse(fs.readFileSync(filepath,{columns:true,skip_empty_lines:true}))
           return csvdata;
}

}
