/**
 * @author sunag / http://www.sunag.com.br/
 */

THREE.NodePass = function() {

	THREE.ShaderPass.call( this );

	this.fragment = new THREE.RawNode( new THREE.ScreenNode() );

	this.node = new THREE.NodeMaterial();
	this.node.fragment = this.fragment;

	this.build();

	this.textureID = 'renderTexture';

};

THREE.NodePass.prototype = Object.create( THREE.ShaderPass.prototype );
THREE.NodePass.prototype.constructor = THREE.NodePass;

THREE.NodePass.prototype.build = function() {

	this.node.build();

	this.uniforms = this.node.uniforms;
	this.material = this.node;

};

THREE.NodeMaterial.Shortcuts( THREE.NodePass.prototype, 'fragment',
[ 'value' ] );