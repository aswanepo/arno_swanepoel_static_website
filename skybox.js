

















      import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.136.0-4Px7Kx1INqCFBN0tXUQc/mode=imports/optimized/three.js';
      //import * as GLTFLoader from 'https://cdn.rawgit.com/mrdoob/three.js/master/examples/js/loaders/GLTFLoader.js';
      //import { OrbitControls } from 'https://cdn.skypack.dev/three-orbit-controls';
      import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";





      let scene, camera, renderer;

      function init() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,45,30000);
        camera.position.set(-900,-200,-900);

        renderer = new THREE.WebGLRenderer({antialias:true});
        renderer.setSize(window.innerWidth,window.innerHeight);
        document.body.appendChild(renderer.domElement);

        let controls = new OrbitControls( camera, renderer.domElement );

        //let controls = new THREE.OrbitControls(camera);
        controls.addEventListener('change', renderer);
        controls.minDistance = 500;
        controls.maxDistance = 1500;
        
        let materialArray = [];
        let texture_ft = new THREE.TextureLoader().load( 'skybox_front.png');
        let texture_bk = new THREE.TextureLoader().load( 'skybox_back.png');
        let texture_up = new THREE.TextureLoader().load( 'skybox_up.png');
        let texture_dn = new THREE.TextureLoader().load( 'skybox_down.png');
        let texture_rt = new THREE.TextureLoader().load( 'skybox_right.png');
        let texture_lf = new THREE.TextureLoader().load( 'skybox_left.png');
          
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
        animate();
      }
      function animate() {
        renderer.render(scene,camera);
        requestAnimationFrame(animate);
      }
      init();






