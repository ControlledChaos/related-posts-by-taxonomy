<?php
/**
 * Tests for dependencies and various plugin functions
 */
class KM_RPBT_Misc_Tests extends KM_RPBT_UnitTestCase {

	/**
	 * Test if posts are created with the factory class.
	 */
	function test_create_posts() {
		$posts = $this->create_posts();
		$this->assertNotEmpty( $posts );
		return $posts;
	}


	/**
	 * Test if terms are created with the factory class.
	 *
	 * @depends test_create_posts
	 */
	function test_assign_taxonomy_terms( array $posts ) {
		$this->assertNotEmpty( $posts );
		$terms = $this->assign_taxonomy_terms( $posts, 'category', 1 );
		$this->assertNotEmpty( $terms );
	}


	/**
	 * Test if posts and terms are created with the factory class.
	 *
	 * Other test methods that create posts depend on this function to succeed.
	 */
	function test_create_posts_with_terms() {
		$create_posts = $this->create_posts_with_terms();
		//$create_posts = array();
		$this->assertNotEmpty( $create_posts );
		$this->assertCount( 5, $create_posts['posts'] );
		$this->assertCount( 5, $create_posts['tax1_terms'] );
		$this->assertCount( 5, $create_posts['tax2_terms'] );
	}


	/**
	 * Test if default WordPress taxonomies exist.
	 */
	function test_get_post_taxonomies() {
		$this->assertEquals( array( 'category', 'post_tag', 'post_format' ), get_object_taxonomies( 'post' ) );
	}


	/**
	 * Test output from WordPress function get_posts_by_author_sql().
	 *
	 * Used in the km_rpbt_related_posts_by_taxonomy() function to replace 'post_type = 'post' with 'post_type IN ( ... )
	 */
	function test_get_posts_by_author_sql() {
		$where  = get_posts_by_author_sql( 'post' );
		$this->assertTrue( (bool) preg_match( "/post_type = 'post'/", $where ) );
	}


	/**
	 * Tests for functions that should not output anything.
	 *
	 * @depends test_create_posts_with_terms
	 * @expectedDeprecated km_rpbt_get_shortcode_atts
	 */
	function test_empty_output() {
		$create_posts = $this->create_posts_with_terms();
		$posts        = $create_posts['posts'];
		$args         =  array( 'fields' => 'ids' );
		$taxonomies   = array( 'category', 'post_tag' );

		ob_start();

		// these functions should not output anything.
		$_plugin      = km_rpbt_plugin();
		$_posts       = km_rpbt_related_posts_by_taxonomy( $posts[0], $taxonomies, $args );
		$_cache_posts = km_rpbt_cache_related_posts( $posts[0], $taxonomies, $args );
		$_args        = km_rpbt_get_default_args();
		$_args['taxonomies'] = $taxonomies;
		$_sanitize    = km_rpbt_sanitize_args( $_args );
		$_shortcode   = km_rpbt_related_posts_by_taxonomy_shortcode( array( 'post_id' => $posts[0] ) );
		$_sc_args     = km_rpbt_get_shortcode_atts();
		$_sc_args['post_id'] = $posts[0];
		$_sc_validate = km_rpbt_validate_shortcode_atts( $_sc_args );
		$_settings    = km_rpbt_get_default_settings();
		$_posts       = get_posts();
		$_sc_output   = km_rpbt_shortcode_output( $_posts, $_sc_validate );
		$_post_types  = km_rpbt_get_post_types( 'post,page' );
		$_taxonomies  = km_rpbt_get_taxonomies( $taxonomies );
		$_value       = km_rpbt_get_comma_separated_values( 'hello,world' );
		$_template    = km_rpbt_related_posts_by_taxonomy_template( 'excerpts' );
		$_ids         = km_rpbt_related_posts_by_taxonomy_validate_ids( '1,2,1,string' );
		$classes1     = km_rpbt_get_post_classes( $_posts[0], 'add-this-class' );
		$classes2     = km_rpbt_sanitize_classes( $classes1 );
		$classes3     = km_rpbt_add_post_classes( $_posts, array( 'post_class' => 'add-this-class' ) );
		$classes4     = km_rpbt_post_class();
		$link         = km_rpbt_get_related_post_title_link( $_posts[0], true );

		$out = ob_get_clean();

		$this->assertEmpty( $out );
	}


	/**
	 * Test if array with validated ids are returned.
	 */
	function test_km_rpbt_related_posts_by_taxonomy_validate_ids() {

		$ids = array( 1, false, 'string', 2, 0, 1, 3 );

		$validated_ids = km_rpbt_related_posts_by_taxonomy_validate_ids( $ids );
		$this->assertEquals( array( 1, 2, 3 ), $validated_ids );

		$ids = '1,string,2,0,###,2,3';
		$validated_ids = km_rpbt_related_posts_by_taxonomy_validate_ids( $ids );
		$this->assertEquals( array( 1, 2, 3 ), $validated_ids );
	}


	/**
	 * Test if correct template was found.
	 */
	function test_km_rpbt_related_posts_by_taxonomy_template() {

		$path = pathinfo( dirname(  __FILE__  ) );

		// get the excerpts template
		$template = km_rpbt_related_posts_by_taxonomy_template( 'excerpts' );
		$path1 = $path['dirname'] . '/templates/related-posts-excerpts.php';
		$this->assertEquals( $path1 , $template );

		// If no template is provided it should default to the links template.
		$template = km_rpbt_related_posts_by_taxonomy_template();
		$path2 = $path['dirname'] . '/templates/related-posts-links.php';
		$this->assertEquals( $path2 , $template );

		// Wrong templates should default to links template.
		$template = km_rpbt_related_posts_by_taxonomy_template( 'not-a-template' );
		$path3 = $path['dirname'] . '/templates/related-posts-links.php';
		$this->assertEquals( $path3 , $template );
	}
}
