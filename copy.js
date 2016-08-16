function copy(argument) {
	var result;
	if(typeof argument ==="object"){
		if(argument instanceof Array){
			result = [];
				for (var j = 0,len = argument.length;j < len;j++ ){
					result[i] = copy(argument[i]);
				}
			}else{
				result = {}
				for(var i in argument){
					result[i] = copy(argument[i]);
				}
			}
		}else{
			result = argument;
		}
		return result;
	}
	//解决IE不兼容getElementsByClassName问题  
function getElementsByClassName(className,root,tagName) {    //root：父节点，tagName：该节点的标签名。 这两个参数均可有可无  
    if(root){  
        root=typeof root=="string" ? document.getElementById(root) : root;     
    }else{  
        root=document.body;  
    }  
    tagName=tagName||"*";                                      
    if (document.getElementsByClassName) {                    //如果浏览器支持getElementsByClassName，就直接的用  
        return root.getElementsByClassName(className);  
    }else {   
        var tag= root.getElementsByTagName(tagName);    //获取指定元素  
        var tagAll = [];                                    //用于存储符合条件的元素  
        for (var i = 0; i < tag.length; i++) {                //遍历获得的元素  
            for(var j=0,n=tag[i].className.split(' ');j<n.length;j++){    //遍历此元素中所有class的值，如果包含指定的类名，就赋值给tagnameAll  
                if(n[j]==className){  
                    tagAll.push(tag[i]);  
                    break;  
                }  
            }  
        }  
        return tagAll;  
    }  
}  
		//解决scrollTop = 0 的问题
		var $scTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
       
        //手机端 rem em
        function setRem(){
            document.documentElement.style.fontSize = window.innerWidth / 16 + "px";
            }
            window.onresize = function(){
                setRem();
            };
        setRem();


