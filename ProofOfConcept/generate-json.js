// http://www.json-generator.com
/*
 [
 '{{repeat(9, 10)}}',
 {
 id: '{{index()}}',
 guid: '{{guid()}}',
 isActive: '{{bool()}}',
 balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
 picture: 'http://placehold.it/32x32',
 age: '{{integer(20, 40)}}',
 eyeColor: '{{random("blue", "brown", "green")}}',
 name: '{{firstName()}} {{surname()}}',
 gender: '{{gender()}}',
 company: '{{company().toUpperCase()}}',
 email: '{{email()}}',
 phone: '+1 {{phone()}}',
 address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
 about: '{{lorem(1, "paragraphs")}}',
 registered: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
 latitude: '{{floating(-90.000001, 90)}}',
 longitude: '{{floating(-180.000001, 180)}}',
 tags: '{{lorem(1, "words")}}',
 friends: '{{firstName()}} {{surname()}}',
 uniqueNumber: '{{integer(1, 40000)}}',
 otherNumber: '{{integer(1, 10000)}}',
 newValue:'{{lorem(2, "words")}}',
 category: '{{integer(1, 40)}}',
 escalation: '{{integer(1, 10)}}',
 stat:'{{bool()}}',
 location: '{{country()}}',
 reassignment_count: '{{integer(1, 40000)}}',
 time_worked:'{{lorem(2, "words")}}',
 order: '{{integer(1, 10)}}',
 due_date:  '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
 number: '{{lorem(1, "words")}}',
 upon_approval: '{{lorem(1, "sentence")}}',
 sla_due: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
 follow_up: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
 notify:'{{bool()}}',
 business_stc: '{{integer(1, 5)}}',
 caused_by: '{{firstName([male])}}',
 rejection_goto: '{{firstName([male])}}',
 assignment_group: '{{lorem(2, "words")}}',
 incident_state:'{{bool()}}',
 opened_at: '{{lorem(2, "words")}}',
 wf_activity: '{{integer(1, 20)}}',
 calendar_duration: '{{integer(1, 50)}}',
 group_list: '{{lorem(1, "words")}}',
 caller_id: '{{random("low", "med", "high")}}',
 comments: '{{lorem(3)}}',
 priority:'{{random("low", "med", "high")}}',
 sys_id: '{{integer(1, 5)}}',
 sys_updated_by: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
 variables: '{{integer(1, 50)}}',
 delivery_task: '{{integer(1, 500)}}',
 sys_updated_on: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
 parent: '{{integer(1, 5000)}}',
 activ:'{{bool()}}',
 opened_by: '{{firstName()}} {{surname()}}',
 expected_start: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
 sys_meta:'{{bool()}}',
 watch_list:'{{bool()}}',
 upon_reject: '{{lorem(1, "words")}}',
 work_notes: '{{lorem(1)}}',
 sys_created_by: '{{firstName()}} {{surname()}}',
 cmdb_ci: '{{lorem(1, "words")}}',
 approval_set: '{{lorem(1, "words")}}',
 user_input:'{{bool()}}',
 sys_created_on: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
 contact_type: '{{lorem(1, "words")}}',
 rfc: '{{bool()}}',
 approval_history: '{{lorem(1, "paragraphs")}}',
 activity_due: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
 severity:'{{random("low", "med", "high")}}',
 subcategory: '{{integer(1, 50)}}',
 work_end: '{{integer(1, 500)}}',
 closed_at: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
 close_notes: '{{lorem(1)}}',
 variable_pool:'{{bool()}}',
 business_duration: '{{integer(1, 500)}}',
 knowledg:'{{bool()}}',
 approval:'{{bool()}}',
 sys_mod_count: '{{integer(1, 100)}}',
 problem_id: '{{integer(1, 5000)}}',
 calendar_stc:'{{random("low", "med", "high")}}',
 sys_domain: '{{integer(1, 500)}}',
 sys_response_variables: '{{lorem(1)}}',
 correlation_id: '{{integer(1, 100)}}',
 sys_class_name: '{{integer(1, 100)}}',
 short_descriptio: '{{lorem(2)}}',
 impact: '{{random("low", "med", "high")}}',
 description: '{{lorem(1)}}',
 correlation_display:'{{bool()}}',
 urgency:'{{random("low", "med", "high")}}',
 assigned_to: '{{firstName() surname()}}',
 made_sla: '{{lorem(1)}}',
 delivery_plan: '{{lorem(1)}}'
 }
 ]

 */


/*function Object(){
    this.name = randNumber();
    this.age = randNumber();
    this.uniqueNumber= randString(35);
    this.otherNumber = randNumber(0,10000);
    this.newValue = randString(10);
    this.category=randNumber(0,1000);
    this.escalation=randNumber(0,50);
    this.state=randNumber(0,1);
    this.location=randString(15);
    this.reassignment_count=randNumber(0,100);
    this.time_worked=randString(10);
    this.order=randNumber(0,34);
    this.due_date=randString(10);
    this.number=randString(15);
    this.upon_approval=randString(10);
    this.sla_due=randString(20);
    this.follow_up=randString(10);
    this.notify=randNumber(0,1);
    this.business_stc=randNumber(0,5);
    this.caused_by=randString(10);
    this.rejection_goto=randString(5);
    this.assignment_group=randString(30);
    this.incident_state=randNumber(0,1);
    this.opened_at=randString(30);
    this.wf_activity=randString(10);
    this.calendar_duration=randString(15);
    this.group_list=randString(10);
    this.caller_id=randNumber(0,1);
    this.comments=randString(10);
    this.priority=randNumber(0,1);
    this.sys_id=randString(30);
    this.sys_updated_by=randString();
    this.variables=randString();
    this.delivery_task=randString();
    this.sys_updated_on=randString(20);
    this.parent=randString(10);
    this.active=randString();
    this.opened_by=randString(20);
    this.expected_start=randString();
    this.sys_meta=randString(6);
    this.watch_list=randString(15);
    this.company=randString(10);
    this.upon_reject=randString(8);
    this.work_notes=randString(15);
    this.sys_created_by=randString(15);
    this.cmdb_ci=randString(4);
    this.approval_set=randString(10);
    this.user_input=randString();
    this.sys_created_on=randString(18);
    this.contact_type=randString();
    this.rfc=randString(5);
    this.approval_history=randString(12);
    this.activity_due=randString();
    this.severity=randNumber(0,6);
    this.subcategory=randNumber(0,5);
    this.work_end=randNumber(0,12);
    this.closed_at=randString();
    this.close_notes=randString(15);
    this.variable_pool=randString(10);
    this.business_duration=randString(10);
    this.knowledge=randString();
    this.approval=randString(10);
    this.sys_mod_count=randNumber(0,100);
    this.problem_id=randNumber(0,2000);
    this.calendar_stc=randNumber(0,1);
    this.work_start=randString();
    this.sys_domain=randString(10);
    this.sys_response_variables=randString(10);
    this.correlation_id=randNumber(0,1000);
    this.sys_class_name=randString(10);
    this.short_description=randString(20);
    this.impact=randNumber(0,10);
    this.description=randString();
    this.correlation_display=randString(4);
    this.urgency=randNumber(0,10);
    this.assigned_to=randString(8);
    this.made_sla=randString(4);
    this.delivery_plan=randString(6);
}*/

function Object(){
    this.name = randNumber();
    this.age = randNumber();
    this.uniqueNumber= randString(35);
    this.otherNumber = randNumber(0,10000);
    this.newValue = randString(10);
    this.category=randNumber(0,1000);
    this.escalation=randNumber(0,50);
    this.state=randNumber(0,1);
    this.location=randString(15);
    this.reassignment_count=randNumber(0,100);
    this.time_worked=randString(10);
    this.order=randNumber(0,34);
    this.due_date=randString(10);
    this.number=randString(15);
    this.upon_approval=randString(10);
    this.sla_due=randString(20);
    this.follow_up=randString(10);
    this.notify=this.state;
    this.business_stc=randNumber(0,5);
    this.caused_by=randString(10);
    this.rejection_goto=randString(5);
    this.assignment_group=randString(30);
    this.incident_state=randNumber(0,1);
    this.opened_at=randString(30);
    this.wf_activity=randString(10);
    this.calendar_duration=randString(15);
    this.group_list=randString(10);
    this.caller_id=this.state;
    this.comments=randString(10);
    this.priority=this.state;
    this.sys_id=randString(30);
    this.sys_updated_by=randString();
    this.variables=randString();
    this.delivery_task=randString();
    this.sys_updated_on=randString(20);
    this.parent=randString(10);
    this.active=randString();
    this.opened_by=randString(20);
    this.expected_start=randString();
    this.sys_meta=randString(6);
    this.watch_list=randString(15);
    this.company=randString(10);
    this.upon_reject=randString(8);
    this.work_notes=randString(15);
    this.sys_created_by=randString(15);
    this.cmdb_ci=randString(4);
    this.approval_set=randString(10);
    this.user_input=randString();
    this.sys_created_on=randString(18);
    this.contact_type=randString();
    this.rfc=randString(5);
    this.approval_history=randString(12);
    this.activity_due=randString();
    this.severity=randNumber(0,6);
    this.subcategory=randNumber(0,5);
    this.work_end=randNumber(0,12);
    this.closed_at=randString();
    this.close_notes=randString(15);
    this.variable_pool=randString(10);
    this.business_duration=randString(10);
    this.knowledge=randString();
    this.approval=randString(10);
    this.sys_mod_count=randNumber(0,100);
    this.problem_id=randNumber(0,2000);
    this.calendar_stc= this.incident_state;
    this.sys_domain=randString(10);
    this.sys_response_variables=randString(10);
    this.correlation_id=randNumber(0,1000);
    this.sys_class_name=randString(10);
    this.short_description=randString(20);
    this.impact=randNumber(0,10);
    this.description=randString();
    this.correlation_display=randString(4);
    this.urgency=randNumber(0,10);
    this.assigned_to=randString(8);
    this.made_sla=randString(4);
    this.delivery_plan=randString(6);
}

function randNumber(min,max){
        var randomNumber;
        if((typeof min !== "number") || (typeof max !== "number") || (min>=max)){
            //throw "incorrect parameters for getRandom min: "+ min +"; max:"+max;
            min=1;
            max=100;
        }
        randomNumber = min + Math.floor(Math.random()*(max-min+1));
        return randomNumber;
}

function randString(maxLength){
    var length,
        output="",
        i;
    if((typeof maxLength !== "number") || maxLength<4){
        maxLength=10;
    }

    length = randNumber(4,maxLength);

    for(i=0;i<maxLength;i++){
        output+=String.fromCharCode(randNumber(48,90));
    }
    return output;
}

var obj;
var encodedObj ={};
var arr = [];
var encodedArr =[];
var count;

for(var i =0; i<50; i++){
    obj = new Object();
    //console.log(obj)
    arr.push(obj);
    count=0;

    for(var prop in obj){
        encodedObj[count]=obj[prop];
        count++;
    }
    encodedArr.push(encodedObj);
    //console.log(encodedObj)
}

var fs = require('fs');

fs.writeFile("normalJSON.txt", JSON.stringify(arr,null,4), function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
  })

fs.writeFile("encodedJSON.txt", JSON.stringify(encodedArr,null,4), function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
})
/*
var str= JSON.stringify(arr);
console.log(str);
str= JSON.stringify(encodedArr);
console.log(encodedArr);
 */
