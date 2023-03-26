import * as THREE from 'three';

const scene = new THREE.Scene();
const width=window.innerWidth;
const height=window.innerHeight;
const camera = new THREE.PerspectiveCamera( 75, width /height, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const size = 10;
const division = 10;

const gridHelper = new THREE.GridHelper(size,division);
gridHelper.position.y = -2.5;
scene.add(gridHelper);

const geometry = new THREE.CylinderGeometry( 1.5,1.5,2 );
const material = new THREE.MeshBasicMaterial( { color: 0x8b4513} );
const cylinder = new THREE.Mesh( geometry, material );
cylinder.position.y = -1.5;

const geometry2 = new THREE.PlaneGeometry( 0.5,1);
const material2 = new THREE.MeshBasicMaterial( { color: "tranparent"} );
const door = new THREE.Mesh( geometry2, material2 );
door.position.z = 2;
door.position.y = -1.7;

const rightWindowGeometry= new THREE.PlaneGeometry( 0.5,0.5,2);
const rightWindowMaterial = new THREE.MeshBasicMaterial( { color: "tranparent"} );
const rightWindow = new THREE.Mesh( rightWindowGeometry, rightWindowMaterial );
rightWindow.position.z = 1;
rightWindow.position.y = -1.4;
rightWindow.position.x = 1.05;

const leftWindowGeometry = new THREE.PlaneGeometry( 0.5,0.5,2);
const leftWindowMaterial = new THREE.MeshBasicMaterial( { color: "transparent"} );
const leftWindow = new THREE.Mesh( leftWindowGeometry, leftWindowMaterial );
leftWindow.position.z = 1;
leftWindow.position.y = -1.4;
leftWindow.position.x = -1.06;


var group = new THREE.Group();
group.add(cylinder);
group.add(door);

const geometry3 = new THREE.CylinderGeometry( 0.1,2,2.3);
const material3 = new THREE.MeshBasicMaterial( { color: "gray"} );
const roof = new THREE.Mesh( geometry3, material3 );
roof.position.y = 0.3;

const trunkGeometry = new THREE.CylinderGeometry(0.2,0.2,4,3);
const leavesGeometry = new THREE.SphereGeometry(1,5,6);

const trunkMaterial = new THREE.MeshBasicMaterial({color:0x8b4513})
const leavesMaterial = new THREE.MeshBasicMaterial({color:"green"})

const trunkMesh = new THREE.Mesh(trunkGeometry,trunkMaterial);
const leavesMesh = new THREE.Mesh(leavesGeometry,leavesMaterial);

leavesMesh.position.set(3,2,0);
trunkMesh.position.set(3,0,0);

var tree = new THREE.Group();
tree.add(trunkMesh);
tree.add(leavesMesh);

const house = new THREE.Group();

house.add(cylinder,roof,door,rightWindow,leftWindow) 
scene.add(tree,house);

camera.position.z = 8;

renderer.render( scene, camera );


			function animate() {
				requestAnimationFrame( animate );

				leavesMesh.rotation.x += 0.02;
                leavesMesh.rotation.z +=0.02;
                roof.rotation.y +=6
				renderer.render( scene, camera );
			}

			animate();


