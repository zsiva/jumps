var sample_data = {"ar":"1","at":"1","au":"1","be":"1","bg":"1","bo":"1","br":"1","be":"1","bz":"1","ca":"1","ch":"1","cl":"1","cm":"1","cn":"1","co":"1",
"cr":"1","cv":"1","cu":"1","cz":"1","de":"1","dk":"1","do":"1","ec":"1","eg":"1","es":"1","fi":"1","fr":"1","gb":"1","gr":"1","gt":"1","hn":"1",
"hr":"1","ht":"1","hu":"1","id":"1","ie":"1","in":"1","is":"1","it":"1","jo":"1","jp":"1","kh":"1","kr":"1","lk":"1","lv":"1","ma":"1","md":"1","mk":"1","mm":"1",
"mx":"1","my":"1","na":"1","ni":"1","nl":"1","no":"1","np":"1","nz":"1","pa":"1","pe":"1","ph":"1","pl":"1","pt":"1","py":"1","rs":"1","ro":"1","ru":"1","se":"1",
"si":"1","sk":"1","th":"1","tr":"1","tt":"1","tz":"1","ua":"1","us":"1","uy":"1","vn":"1","za":"1"
};



var jumpsPerCountry = [
  { "country_code": "ar", "jumps": "14", "jumpers": "8","last_jump":"14-sept-2012" },
  { "country_code": "at", "jumps": "1" ,"jumpers": "1","last_jump":"15-sept-2012"},
  { "country_code": "au", "jumps": "11" ,"jumpers": "3","last_jump":"16-sept-2012"},
  { "country_code": "be", "jumps": "2" ,"jumpers": "1","last_jump":"17-sept-2012"},
  { "country_code": "bg", "jumps": "2" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "bo", "jumps": "2" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "br", "jumps": "11" ,"jumpers": "10","last_jump":"18-sept-2012"},
  { "country_code": "bz", "jumps": "2" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "ca", "jumps": "6" ,"jumpers": "3","last_jump":"18-sept-2012"},
  { "country_code": "ch", "jumps": "5" ,"jumpers": "2","last_jump":"18-sept-2012"},
  { "country_code": "cl", "jumps": "1" ,"jumpers": "1","last_jump":"18-sept-2012"},
  { "country_code": "cm", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "cn", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "co", "jumps": "1" ,"jumpers": "1","last_jump":"18-sept-2012"},
  { "country_code": "cr", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "cv", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "cu", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "cz", "jumps": "2" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "de", "jumps": "74","jumpers": "16","last_jump":"18-sept-2012"},
  { "country_code": "dk", "jumps": "5" ,"jumpers": "3","last_jump":"18-sept-2012"},
  { "country_code": "do", "jumps": "2" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "ec", "jumps": "2" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "eg", "jumps": "4" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "es", "jumps": "271" ,"jumpers": "79","last_jump":"18-sept-2012"},
  { "country_code": "fi", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "fr", "jumps": "89" ,"jumpers": "14","last_jump":"18-sept-2012"},
  { "country_code": "gb", "jumps": "10" ,"jumpers": "5","last_jump":"18-sept-2012"},  
  { "country_code": "gr", "jumps": "90" ,"jumpers": "7","last_jump":"18-sept-2012"},
  { "country_code": "gt", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "hn", "jumps": "3" ,"jumpers": "0","last_jump":"18-sept-2012"},  
  { "country_code": "hr", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "ht", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "hu", "jumps": "1" ,"jumpers": "1","last_jump":"18-sept-2012"},
  { "country_code": "id", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "ie", "jumps": "47" ,"jumpers": "5","last_jump":"18-sept-2012"},
  { "country_code": "in", "jumps": "2" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "is", "jumps": "2" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "it", "jumps": "39" ,"jumpers": "7","last_jump":"18-sept-2012"},  
  { "country_code": "jo", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "jp", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "kh", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "kr", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "lk", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "lt", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},  
  { "country_code": "ma", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "md", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "mk", "jumps": "1" ,"jumpers": "1","last_jump":"18-sept-2012"},
  { "country_code": "mm", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "mx", "jumps": "5" ,"jumpers": "3","last_jump":"18-sept-2012"},
  { "country_code": "my", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "na", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "ni", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "no", "jumps": "15" ,"jumpers": "7","last_jump":"18-sept-2012"},
  { "country_code": "np", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "nz", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "pa", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "pe", "jumps": "8" ,"jumpers": "8","last_jump":"18-sept-2012"},
  { "country_code": "ph", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "pl", "jumps": "30" ,"jumpers": "7","last_jump":"18-sept-2012"},
  { "country_code": "pt", "jumps": "4" ,"jumpers": "2","last_jump":"18-sept-2012"},
  { "country_code": "py", "jumps": "4" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "rs", "jumps": "4" ,"jumpers": "2","last_jump":"18-sept-2012"},
  { "country_code": "ro", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "ru", "jumps": "2" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "se", "jumps": "2" ,"jumpers": "1","last_jump":"18-sept-2012"},
  { "country_code": "si", "jumps": "5" ,"jumpers": "2","last_jump":"18-sept-2012"},
  { "country_code": "sk", "jumps": "2" ,"jumpers": "1","last_jump":"18-sept-2012"},
  { "country_code": "th", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "tr", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "tt", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "tz", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "ua", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "us", "jumps": "24" ,"jumpers": "3","last_jump":"18-sept-2012"},
  { "country_code": "uy", "jumps": "1" ,"jumpers": "1","last_jump":"18-sept-2012"},
  { "country_code": "vn", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"},
  { "country_code": "za", "jumps": "1" ,"jumpers": "0","last_jump":"18-sept-2012"}
  
  
];