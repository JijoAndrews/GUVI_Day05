
var resumejsondata=
{
    "basics": {
      "name": "jijo Andrews",
      "label": "Programmer",
      "image": "",
      "email": "jijoAndrews@gmail.com",
      "phone": "(912) 555-4321",
      "url": "https://jijoAndrews_01.com",
      "summary": "A summary of John Doe…",
      "location": {
        "address": "2712 Broadway St",
        "postalCode": "CA 94115",
        "city": "San Francisco",
        "countryCode": "US",
        "region": "California"
      },
      "profiles": {
        "network": "Twitter",
        "username": "jijo",
        "url": "https://twitter.com/john"
      }
    },
    "work": [{
      "name": "Company",
      "position": "President",
      "url": "https://company.com",
      "startDate": "2013-01-01",
      "endDate": "2014-01-01",
      "summary": "Description…",
    }],
    "volunteer": [{
      "organization": "Organization",
      "position": "Volunteer",
      "url": "https://organization.com/",
      "startDate": "2012-01-01",
      "endDate": "2013-01-01",
      "summary": "Description…",
    }],
    "education": [{
      "institution": "University",
      "url": "https://institution.com/",
      "area": "Software Development",
      "studyType": "Bachelor",
      "startDate": "2011-01-01",
      "endDate": "2013-01-01",
      "score": "4.0",
    }],
    "certificates": [{
      "name": "Certificate",
      "date": "2021-11-07",
      "issuer": "Company",
      "url": "https://certificate.com"
    }],
    "publications": [{
      "name": "Publication",
      "publisher": "Company",
      "releaseDate": "2014-10-01",
      "url": "https://publication.com",
      "summary": "Description…"
    }],
    "skills": [{
      "name": "Web Development",
      "level": "Master",
    }],
    "languages": [{
      "language": "English",
      "fluency": "Native speaker"
    }],
    "interests": [{
      "name": "Wildlife",
    }],
    "references": [{
      "name": "Jane Doe",
      "reference": "Reference…"
    }],
    "projects": [{
      "name": "Project",
      "startDate": "2019-01-01",
      "endDate": "2021-01-01",
      "description": "Description...",     
    }]
}

var jsondatakeys=Object.keys(resumejsondata);

//------------------------for loop----------------------\\
console.log("------------------FOR-LOOP--------------");
for(var i=0;i<jsondatakeys.length;i++)
{
    console.log(jsondatakeys[i],resumejsondata[jsondatakeys[i]]);
}
    
//------------------------for in----------------------\\
console.log("------------------FOR-IN--------------");
for(var obj in resumejsondata)
{
    console.log(  obj,resumejsondata[obj]);
}

//------------------------for of----------------------\\
console.log("------------------FOR-OF--------------");
for(var obj of jsondatakeys)
{
    console.log(obj,resumejsondata[obj]);
}

//------------------------forEach----------------------\\
console.log("------------------FOR-EACH--------------");
jsondatakeys.forEach(element => 
{
    console.log(element,resumejsondata[element]);
});