function fycheck(){
    var math=document.getElementById("Maths").value;
    var phy=document.getElementById("Physics").value;
    var ch=document.getElementById("Chemistry").value;
    var bee=document.getElementById("BEE").value;
    var eme=document.getElementById("EME").value;
    var cpp=document.getElementById("CPP").value;
    var cl=document.getElementById("CL").value;
    var pl=document.getElementById("PL").value;
    var co=document.getElementById("co").value;
    var ws=document.getElementById("ws").value;
    switch(math){
        case 'AA': math=10;
        break;
        case 'AB': math=9;
        break;
        case 'BB': math=8;
        break;
        case 'BC': math=7;
        break;
        case 'CC': math=6;
        break;
        case 'CD': math=5;
        break;
        case 'DD': math=4;
        break;
        case 'FF': math=0;
        break;
        default:alert('Invalid Input');
    }
    switch(phy){
        case 'AA': phy=10;
        break;
        case 'AB': phy=9;
        break;
        case 'BB': phy=8;
        break;
        case 'BC': phy=7;
        break;
        case 'CC': phy=6;
        break;
        case 'CD': phy=5;
        break;
        case 'DD': phy=4;
        break;
        case 'FF': phy=0;
        break;
        default:alert('Invalid Input');
    }
    switch(ch){
        case 'AA': ch=10;
        break;
        case 'AB': ch=9;
        break;
        case 'BB': ch=8;
        break;
        case 'BC': ch=7;
        break;
        case 'CC': ch=6;
        break;
        case 'CD': ch=5;
        break;
        case 'DD': ch=4;
        break;
        case 'FF': ch=0;
        break;
        default:alert('Invalid Input');
    }
    switch(bee){
        case 'AA': bee=10;
        break;
        case 'AB': bee=9;
        break;
        case 'BB': bee=8;
        break;
        case 'BC': bee=7;
        break;
        case 'CC': bee=6;
        break;
        case 'CD': bee=5;
        break;
        case 'DD': bee=4;
        break;
        case 'FF': bee=0;
        break;
        default:alert('Invalid Input');
    }
    switch(eme){
        case 'AA': eme=10;
        break;
        case 'AB': eme=9;
        break;
        case 'BB': eme=8;
        break;
        case 'BC': eme=7;
        break;
        case 'CC': eme=6;
        break;
        case 'CD': eme=5;
        break;
        case 'DD': eme=4;
        break;
        case 'FF': eme=0;
        break;
        default:alert('Invalid Input');
    }
    switch(cpp){
        case 'AA': cpp=10;
        break;
        case 'AB': cpp=9;
        break;
        case 'BB': cpp=8;
        break;
        case 'BC': cpp=7;
        break;
        case 'CC': cpp=6;
        break;
        case 'CD': cpp=5;
        break;
        case 'DD': cpp=4;
        break;
        case 'FF': cpp=0;
        break;
        default:alert('Invalid Input');
    }
    switch(cl){
        case 'AA': cl=10;
        break;
        case 'AB': cl=9;
        break;
        case 'BB': cl=8;
        break;
        case 'BC': cl=7;
        break;
        case 'CC': cl=6;
        break;
        case 'CD': cl=5;
        break;
        case 'DD': cl=4;
        break;
        case 'FF': cl=0;
        break;
        default:alert('Invalid Input');
    }
    switch(pl){
        case 'AA': pl=10;
        break;
        case 'AB': pl=9;
        break;
        case 'BB': pl=8;
        break;
        case 'BC': pl=7;
        break;
        case 'CC': pl=6;
        break;
        case 'CD': pl=5;
        break;
        case 'DD': pl=4;
        break;
        case 'FF': pl=0;
        break;
        default:alert('Invalid Input');
    }
    switch(co){
        case 'AA': co=10;
        break;
        case 'AB': co=9;
        break;
        case 'BB': co=8;
        break;
        case 'BC': co=7;
        break;
        case 'CC': co=6;
        break;
        case 'CD': co=5;
        break;
        case 'DD': co=4;
        break;
        case 'FF': co=0;
        break;
        default:alert('Invalid Input');
    }
    switch(ws){
        case 'AA': ws=10;
        break;
        case 'AB': ws=9;
        break;
        case 'BB': ws=8;
        break;
        case 'BC': ws=7;
        break;
        case 'CC': ws=6;
        break;
        case 'CD': ws=5;
        break;
        case 'DD': ws=4;
        break;
        case 'FF': ws=0;
        break;
        default:alert('Invalid Input');
    }
    var pointer=((ch*2)+(cl*1)+(phy*3)+(pl*1)+(math*4)+(bee*2)+(eme*2)+(co*2)+(cpp*2)+(ws*1))/20;
    
    document.getElementById('hu').innerHTML=pointer;

    
    


}
function fycheckCS(){
    var math=document.getElementById("MathsCS").value;
    var phy=document.getElementById("PhysicsCS").value;
    var ch=document.getElementById("ChemistryCS").value;
    var bee=document.getElementById("BEECS").value;
    var eme=document.getElementById("EMECS").value;
    var cpp=document.getElementById("CPPCS").value;
    var cl=document.getElementById("CLCS").value;
    var pl=document.getElementById("PLCS").value;
    var co=document.getElementById("coCS").value;
    var ws=document.getElementById("wsCS").value;
    switch(math){
        case 'AA': math=10;
        break;
        case 'AB': math=9;
        break;
        case 'BB': math=8;
        break;
        case 'BC': math=7;
        break;
        case 'CC': math=6;
        break;
        case 'CD': math=5;
        break;
        case 'DD': math=4;
        break;
        case 'FF': math=0;
        break;
        default:alert('Invalid Input');
    }
    switch(phy){
        case 'AA': phy=10;
        break;
        case 'AB': phy=9;
        break;
        case 'BB': phy=8;
        break;
        case 'BC': phy=7;
        break;
        case 'CC': phy=6;
        break;
        case 'CD': phy=5;
        break;
        case 'DD': phy=4;
        break;
        case 'FF': phy=0;
        break;
        default:alert('Invalid Input');
    }
    switch(ch){
        case 'AA': ch=10;
        break;
        case 'AB': ch=9;
        break;
        case 'BB': ch=8;
        break;
        case 'BC': ch=7;
        break;
        case 'CC': ch=6;
        break;
        case 'CD': ch=5;
        break;
        case 'DD': ch=4;
        break;
        case 'FF': ch=0;
        break;
        default:alert('Invalid Input');
    }
    switch(bee){
        case 'AA': bee=10;
        break;
        case 'AB': bee=9;
        break;
        case 'BB': bee=8;
        break;
        case 'BC': bee=7;
        break;
        case 'CC': bee=6;
        break;
        case 'CD': bee=5;
        break;
        case 'DD': bee=4;
        break;
        case 'FF': bee=0;
        break;
        default:alert('Invalid Input');
    }
    switch(eme){
        case 'AA': eme=10;
        break;
        case 'AB': eme=9;
        break;
        case 'BB': eme=8;
        break;
        case 'BC': eme=7;
        break;
        case 'CC': eme=6;
        break;
        case 'CD': eme=5;
        break;
        case 'DD': eme=4;
        break;
        case 'FF': eme=0;
        break;
        default:alert('Invalid Input');
    }
    switch(cpp){
        case 'AA': cpp=10;
        break;
        case 'AB': cpp=9;
        break;
        case 'BB': cpp=8;
        break;
        case 'BC': cpp=7;
        break;
        case 'CC': cpp=6;
        break;
        case 'CD': cpp=5;
        break;
        case 'DD': cpp=4;
        break;
        case 'FF': cpp=0;
        break;
        default:alert('Invalid Input');
    }
    switch(cl){
        case 'AA': cl=10;
        break;
        case 'AB': cl=9;
        break;
        case 'BB': cl=8;
        break;
        case 'BC': cl=7;
        break;
        case 'CC': cl=6;
        break;
        case 'CD': cl=5;
        break;
        case 'DD': cl=4;
        break;
        case 'FF': cl=0;
        break;
        default:alert('Invalid Input');
    }
    switch(pl){
        case 'AA': pl=10;
        break;
        case 'AB': pl=9;
        break;
        case 'BB': pl=8;
        break;
        case 'BC': pl=7;
        break;
        case 'CC': pl=6;
        break;
        case 'CD': pl=5;
        break;
        case 'DD': pl=4;
        break;
        case 'FF': pl=0;
        break;
        default:alert('Invalid Input');
    }
    switch(co){
        case 'AA': co=10;
        break;
        case 'AB': co=9;
        break;
        case 'BB': co=8;
        break;
        case 'BC': co=7;
        break;
        case 'CC': co=6;
        break;
        case 'CD': co=5;
        break;
        case 'DD': co=4;
        break;
        case 'FF': co=0;
        break;
        default:alert('Invalid Input');
    }
    switch(ws){
        case 'AA': ws=10;
        break;
        case 'AB': ws=9;
        break;
        case 'BB': ws=8;
        break;
        case 'BC': ws=7;
        break;
        case 'CC': ws=6;
        break;
        case 'CD': ws=5;
        break;
        case 'DD': ws=4;
        break;
        case 'FF': ws=0;
        break;
        default:alert('Invalid Input');
    }
    var pointer=((ch*2)+(cl*1)+(phy*3)+(pl*1)+(math*4)+(bee*2)+(eme*2)+(co*2)+(cpp*2)+(ws*1))/20;
    
    document.getElementById('huCS').innerHTML=pointer;
    
    
    


}