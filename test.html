<html>
<head>
<body>
<script type="text/javascript" src="jquery-1.11.3.js"></script>

<script src ="./three.js-master/build/three.js"></script>

<script src ="./three.js-master/examples/js/controls/OrbitControls.js">
</script>
<script src ="./three.js-master/examples/js/renderers/Projector.js">
</script>
<script type="text/javascript" src="math.min.js"></script>



<script type="text/javascript">


window.onload = createsphere();
function createsphere() 
{
var controls,scene,camera,renderer;
var planes = [];
var baseVector = new THREE.Vector3(0, 0, 1);
var camDir = new THREE.Vector3();
var planeLookAt = new THREE.Vector3();
function init() 
{

    var spriteResponse = [];
    spriteResponse[0] = {ID:1, x: 0, y: 0};
    spriteResponse[1] = {ID:2, x: 0, y: 0.1};
    spriteResponse[2] = {ID:3, x: 0, y: 0.5};
    spriteResponse[3] = {ID:4, x: 0.5, y: 0};
    spriteResponse[4] = {ID:5, x: 0.25, y: 0.5 };

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    //camera.position.y = 1;
    camera.position.z = 1 ;             
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer = new THREE.WebGLRenderer( {antialias:true} );
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);      
 /* ------------------------ creating the geometry of sphere------------------------------*/

    var radius = 2.5;
    var spheregeometry = new THREE.SphereGeometry(radius, 20, 20, 0, -6.283, 1, 1);
    //var texture =  THREE.ImageUtils.loadTexture ('rbi00000083.jpg');
    //texture.minFilter = THREE.NearestFilter;
    //var spherematerial = new THREE.MeshBasicMaterial({map: texture});
    var spherematerial = new THREE.MeshBasicMaterial({color: '#A9A9A9'});
    var sphere = new THREE.Mesh(spheregeometry, spherematerial); 
    scene.add(sphere);
    scene.add(camera);
    scene.autoUpdate = true;                
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.minPolarAngle = Math.PI/4;
    controls.maxPolarAngle = 3*Math.PI/4;   

    for(var i=0; i<spriteResponse.length;i++)
    {




        //var spriteAlignment = new THREE.Vector2(0,0) ;
        material_plane = new THREE.MeshBasicMaterial( {color: 0xffffff,side: THREE.DoubleSide } );
        material_plane.needsUpdate = true;
        //material.transparent=true;
        geometry_plane = new THREE.PlaneGeometry(0.3, 0.2);
        plane = new THREE.Mesh( geometry_plane, material_plane );
        plane.database_id = spriteResponse[i].ID;
        plane.LabelText   = spriteResponse[i].name;




        plane.position.set(spriteResponse[i].x,spriteResponse[i].y,-1);



        scene.add(plane);
        //plane.userData = { keepMe: true };
        planes.push(plane);
        //plane.id = cardinal.ID;
        //var direction = camera.getWorldDirection();
        camera.updateMatrixWorld();
        var vector = camera.position.clone();
        vector.applyMatrix3( camera.matrixWorld );
        plane.lookAt(vector);
        plane.userData = { URL: "http://stackoverflow.com"};
        document.addEventListener( 'mousedown', onDocumentMouseDown, false );

    }

    function onDocumentMouseDown( event ) 
    {

        //clearScene();
        event.preventDefault();

        var mouse = new THREE.Vector2();
        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        var raycaster = new THREE.Raycaster();
        raycaster.setFromCamera( mouse, camera );               
        var intersects = raycaster.intersectObjects( planes );                  

        var matched_marker = null;
        if(intersects.length != 0)
        {
            $('html,body').css('cursor','pointer');//mouse cursor change
            for ( var i = 0;  intersects.length > 0 && i < intersects.length; i++)
            {
                window.open(intersects[0].object.userData.URL);
            }
        }
        else
            $('html,body').css('cursor','cursor');//mouse cursor change
    }//onDocumentMouseDown( event )





}

function onDocumentMouseMove(event) {

    var mouse = new THREE.Vector2();
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    var raycaster = new THREE.Raycaster();
    raycaster.setFromCamera( mouse, camera );
    var intersects = raycaster.intersectObjects( planes );

    if(intersects.length > 0) {
        $('html,body').css('cursor', 'pointer');
    } else {
        $('html,body').css('cursor', 'default');
    }

}

function animate() 
{
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
init();
animate();


}

</script>
</body>
</head>
</html>