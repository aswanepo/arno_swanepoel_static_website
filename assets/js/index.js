      screen.orientation.lock('landscape');
      //screen.lockOrientation('portrait');
      //screen.addEventListener("orientationchange", function () {
      //    console.log("The orientation of the screen is: " + screen.orientation);
      //});

      // Find the latest version by visiting https://cdn.skypack.dev/three.

      import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.136.0-4Px7Kx1INqCFBN0tXUQc/mode=imports/optimized/three.js';
      //import * as GLTFLoader from 'https://cdn.rawgit.com/mrdoob/three.js/master/examples/js/loaders/GLTFLoader.js';
      //import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three-orbitcontrols@2.110.3/OrbitControls.js';
      import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";

      const scene = new THREE.Scene();
      //const gltfLoader = new THREE.GLTFLoader();


      /*function addScript(src) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = src;
        document.getElementsByTagName('head')[0].appendChild(s);
        return s;  // to remove it later
      }

            //addScript("https://cdn.skypack.dev/pin/three@v0.136.0-4Px7Kx1INqCFBN0tXUQc/mode=imports/optimized/three.js")
            //addScript("https://cdn.skypack.dev/pin/three@v0.136.0-4Px7Kx1INqCFBN0tXUQc/mode=imports/optimized/three.js/examples/jsm/controls/OrbitControls.js")
      addScript("./index.js")
      */







      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

      const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg'),
      });

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.position.setZ(30);
      camera.position.setX(-3);

      renderer.render(scene, camera);

      // Torus

      const geometry = new THREE.TorusGeometry(5, 0.5, 7, 6);
      const material = new THREE.MeshStandardMaterial({ color: 0x4b81c2 });
      const torus = new THREE.Mesh(geometry, material);

      scene.add(torus);
      torus.position.z = -5;
      torus.position.x = 1.5;

      // Lights

      const pointLight = new THREE.PointLight(0xffffff);
      pointLight.position.set(5, 5, 5);

      const ambientLight = new THREE.AmbientLight(0xffffff);
      scene.add(pointLight, ambientLight);

      // Helpers

      // const lightHelper = new THREE.PointLightHelper(pointLight)
      // const gridHelper = new THREE.GridHelper(200, 50);
      // scene.add(lightHelper, gridHelper)

      // const controls = new OrbitControls(camera, renderer.domElement);

      function addStar() {
        const geometry = new THREE.SphereGeometry(0.25, 24, 24);
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const star = new THREE.Mesh(geometry, material);

        const [x, y, z] = Array(3)
          .fill()
          .map(() => THREE.MathUtils.randFloatSpread(100));

        star.position.set(x, y, z);
        scene.add(star);
      }

      Array(200).fill().forEach(addStar);

      // Background

      //const spaceTexture = new THREE.TextureLoader().load('assets/images/space_4.jpg');
      //scene.background = spaceTexture;








        let controls = new OrbitControls( camera, renderer.domElement );

        //let controls = new THREE.OrbitControls(camera);
        controls.addEventListener('change', renderer);
        controls.minDistance = 500;
        controls.maxDistance = 1500;
        
        let materialArray = [];
        let texture_ft = new THREE.TextureLoader().load( 'assets/images/skybox_front.png');
        let texture_bk = new THREE.TextureLoader().load( 'assets/images/skybox_back.png');
        let texture_up = new THREE.TextureLoader().load( 'assets/images/skybox_up.png');
        let texture_dn = new THREE.TextureLoader().load( 'assets/images/skybox_down.png');
        let texture_rt = new THREE.TextureLoader().load( 'assets/images/skybox_right.png');
        let texture_lf = new THREE.TextureLoader().load( 'assets/images/skybox_left.png');
          
        materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
        materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
        materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
        materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
        materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
        materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));
   
        for (let i = 0; i < 6; i++)
           materialArray[i].side = THREE.BackSide;
        let skyboxGeo = new THREE.BoxGeometry( 10000, 10000, 10000);
        let skybox = new THREE.Mesh( skyboxGeo, materialArray );
        scene.add( skybox );  
        //animate();
      



















      // Avatar

      const user_pic_Texture = new THREE.TextureLoader().load('assets/images/arno.jpg');

      const user_pic = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: user_pic_Texture }));

      scene.add(user_pic);

      // Moon

      const moonTexture = new THREE.TextureLoader().load('assets/images/moon.jpg');
      const normalTexture = new THREE.TextureLoader().load('assets/images/normal.jpg');

      const moon = new THREE.Mesh(
        new THREE.SphereGeometry(3, 32, 32),
        new THREE.MeshStandardMaterial({
          map: moonTexture,
          normalMap: normalTexture,
        })
      );

      scene.add(moon);

      moon.position.z = 30;
      moon.position.setX(-10);

      user_pic.position.z = -5;
      user_pic.position.x = 2;

      // Scroll Animation
      var lastScrollTop = 0;
      var scroll_position_now = 0;
      var scroll_position_before = 0;

      /*/ element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
      document.body.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
         var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
         if (st > lastScrollTop){
            // downscroll code
           moveCameraDown()
         } else {
            // upscroll code
           moveCameraUp()
         }
         lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
      }, false);
        */   

      function moveCamera() {
        console.log("scrolling: ", document.documentElement.scrollTop)
        scroll_position_now = document.documentElement.scrollTop;
        console.log("scroll_position_now: ", scroll_position_now)

        if(scroll_position_now > scroll_position_before){
          console.log("scroll_down: ", scroll_position_now)
          moveCameraDown()
        }
        else{
          console.log("scroll_up: ", scroll_position_now)
          moveCameraUp()
        }
        scroll_position_before = scroll_position_now;
      }      
            
      function moveCameraUp() {
        const t = document.body.getBoundingClientRect().top;
        //Get the button
        console.log("t: ", t)
        var mybutton = document.getElementById("myBtn");
        if (t < -500){
          mybutton.style.display = "block";
          console.log("show button")
        } else {
          mybutton.style.display = "none";
          console.log("hide button")
        }

        moon.rotation.x += 0.05;
        moon.rotation.y += 0.075;
        moon.rotation.z += 0.05;

        user_pic.rotation.y += 0.01;
        user_pic.rotation.z += 0.01;

        camera.position.z = t * -0.01;
        camera.position.x = t * -0.0002;
        camera.rotation.y = t * -0.0002;
      }
            
      function moveCameraDown() {
        const t = document.body.getBoundingClientRect().top;
        //Get the button
        console.log("t: ", t)
        var mybutton = document.getElementById("myBtn");
        if (t < -500){
          mybutton.style.display = "block";
          console.log("show button")
        } else {
          mybutton.style.display = "none";
          console.log("hide button")
        }
    
        moon.rotation.x += 0.05;
        moon.rotation.y += 0.075;
        moon.rotation.z += 0.05;

        user_pic.rotation.y += 0.01;
        user_pic.rotation.z += 0.01;

        camera.position.z = t * -0.01;
        camera.position.x = t * -0.0002;
        camera.rotation.y = t * -0.0002;
      }
            
      // // When the user clicks on the button, scroll to the top of the document
      function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }


      console.log(document.body.onscroll)
      document.body.onscroll = moveCamera;
      moveCamera();

      // Animation Loop

      function animate() {
        requestAnimationFrame(animate);

        torus.rotation.x += 0.01;
        torus.rotation.y += 0.005;
        torus.rotation.z += 0.01;

        moon.rotation.x += 0.005;

        // controls.update();

        renderer.render(scene, camera);
      }



  //Declare three.js variables
  var stars=[];


  function addSphere(){

        // The loop will move from z position of -1000 to z position 1000, adding a random particle at each position. 
        for ( var z= -1000; z < 1000; z+=20 ) {
    
          // Make a sphere (exactly the same as before). 
          var geometry   = new THREE.SphereGeometry(0.5, 32, 32)
          var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
          var sphere = new THREE.Mesh(geometry, material)
    
          // This time we give the sphere random x and y positions between -500 and 500
          sphere.position.x = Math.random() * 1000 - 500;
          sphere.position.y = Math.random() * 1000 - 500;
    
          // Then set the z position to where it is in the loop (distance of camera)
          sphere.position.z = z;
    
          // scale it up a bit
          sphere.scale.x = sphere.scale.y = 2;
    
          //add the sphere to the scene
          scene.add( sphere );
    
          //finally push it to the stars array 
          stars.push(sphere); 
        }
  }

  function animateStars() { 
        
    // loop through each star
    for(var i=0; i<stars.length; i++) {
      
      var star = stars[i]; 
        
      // and move it forward dependent on the mouseY position. 
      star.position.z +=  i/10;
        
      // if the particle is too close move it to the back
      if(star.position.z>1000) star.position.z-=2000; 
      
    }
  
  }

  function render() {
    //get the frame
    requestAnimationFrame( render );

    //render the scene
    renderer.render( scene, camera );
    animateStars();

  }
  
  //init();
  addSphere();
  render();

  animate();






      // loader.load( 'models/fbx/myModel.fbx', function ( object ) {

      //     scene.add( object );

      // }, undefined, function ( e ) {

      //   console.error( e );

      // } );


















