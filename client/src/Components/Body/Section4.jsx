import React from 'react'
import { serverUrl } from '../../config/prod'

export default function Section4({ data }) {
    return (
        <div>
            <section class="elementor-section elementor-top-section elementor-element elementor-element-6b9b504 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6b9b504" data-element_type="section">
                <div class="elementor-container elementor-column-gap-default">
                    <div class="elementor-row">
                        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e79e46b" data-id="e79e46b" data-element_type="column">
                            <div class="elementor-column-wrap elementor-element-populated">
                                <div class="elementor-widget-wrap">
                                    <div class="elementor-element elementor-element-5e7c09a premium-cursor-icon premium-gbadge-stripe premium-gbadge-row premium-gbadge-right premium-gbadge-top elementor-widget elementor-widget-jet-listing-grid" data-id="5e7c09a" data-element_type="widget" data-settings="{&quot;columns&quot;:3,&quot;columns_mobile&quot;:&quot;1&quot;}" data-widget_type="jet-listing-grid.default">
                                        <div class="elementor-widget-container">
                                            <div class="jet-listing-grid jet-listing">
                                                <div class="jet-listing-grid__items grid-col-desk-3 grid-col-tablet-3 grid-col-mobile-1 jet-listing-grid--1521" data-nav="{&quot;enabled&quot;:false,&quot;type&quot;:null,&quot;more_el&quot;:null,&quot;query&quot;:[],&quot;widget_settings&quot;:{&quot;lisitng_id&quot;:1521,&quot;posts_num&quot;:400,&quot;columns&quot;:3,&quot;columns_tablet&quot;:3,&quot;columns_mobile&quot;:1,&quot;is_archive_template&quot;:&quot;&quot;,&quot;post_status&quot;:[&quot;publish&quot;],&quot;use_random_posts_num&quot;:&quot;&quot;,&quot;max_posts_num&quot;:9,&quot;not_found_message&quot;:&quot;No data was found&quot;,&quot;is_masonry&quot;:false,&quot;equal_columns_height&quot;:&quot;&quot;,&quot;use_load_more&quot;:&quot;&quot;,&quot;load_more_id&quot;:&quot;&quot;,&quot;load_more_type&quot;:&quot;click&quot;,&quot;use_custom_post_types&quot;:&quot;&quot;,&quot;custom_post_types&quot;:[],&quot;hide_widget_if&quot;:&quot;&quot;,&quot;carousel_enabled&quot;:&quot;&quot;,&quot;slides_to_scroll&quot;:&quot;1&quot;,&quot;arrows&quot;:&quot;true&quot;,&quot;arrow_icon&quot;:&quot;fa fa-angle-left&quot;,&quot;dots&quot;:&quot;&quot;,&quot;autoplay&quot;:&quot;true&quot;,&quot;autoplay_speed&quot;:5000,&quot;infinite&quot;:&quot;true&quot;,&quot;center_mode&quot;:&quot;&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500,&quot;inject_alternative_items&quot;:&quot;&quot;,&quot;injection_items&quot;:[],&quot;scroll_slider_enabled&quot;:&quot;&quot;,&quot;scroll_slider_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;],&quot;custom_query&quot;:false,&quot;custom_query_id&quot;:&quot;&quot;,&quot;_element_id&quot;:&quot;&quot;}}" data-page="1" data-pages="1" data-listing-source="posts">
                                                    {data.map((e, index) => (
                                                        <div key={index} class="jet-listing-grid__item jet-listing-dynamic-post-1702" data-post-id="1702">
                                                            <div class="jet-engine-listing-overlay-wrap" data-url={`${serverUrl}${e.id}`}>
                                                                <div data-elementor-type="jet-listing-items" data-elementor-id="1521" class="elementor elementor-1521" data-elementor-settings="[]">
                                                                    <div class="elementor-inner">
                                                                        <div class="elementor-section-wrap">
                                                                            <section class="elementor-section elementor-top-section elementor-element elementor-element-5dfe522 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5dfe522" data-element_type="section">
                                                                                <div class="elementor-container elementor-column-gap-default">
                                                                                    <div class="elementor-row">
                                                                                        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b048e26" data-id="b048e26" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                                                            <div class="elementor-column-wrap elementor-element-populated">
                                                                                                <div class="elementor-widget-wrap">
                                                                                                    <div class="elementor-element elementor-element-fb08494 elementor-widget elementor-widget-image" data-id="fb08494" data-element_type="widget" data-widget_type="image.default">
                                                                                                        <div class="elementor-widget-container">
                                                                                                            <div class="elementor-image">
                                                                                                                <img width="421" height="352" src={e.image} class="attachment-large size-large" alt=""  sizes="(max-width: 421px) 100vw, 421px" />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="elementor-element elementor-element-75f5d1f elementor-widget elementor-widget-heading" data-id="75f5d1f" data-element_type="widget" data-widget_type="heading.default">
                                                                                                        <div class="elementor-widget-container">
                                                                                                            <h2 class="elementor-heading-title elementor-size-default">{e.name}</h2>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="elementor-element elementor-element-c3360b8 elementor-widget elementor-widget-text-editor" data-id="c3360b8" data-element_type="widget" data-widget_type="text-editor.default">
                                                                                                        <div class="elementor-widget-container">
                                                                                                            <div class="elementor-text-editor elementor-clearfix">
                                                                                                                {e.paragraph}
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="elementor-element elementor-element-b56f423 elementor-align-center elementor-widget elementor-widget-button" data-id="b56f423" data-element_type="widget" data-widget_type="button.default">
                                                                                                        <div class="elementor-widget-container">
                                                                                                            <div class="elementor-button-wrapper">
                                                                                                                <a href={`${serverUrl}${e.id}`} class="elementor-button-link elementor-button elementor-size-sm" role="button">
                                                                                                                    <span class="elementor-button-content-wrapper">
                                                                                                                        <span class="elementor-button-text">Book Appointment</span>
                                                                                                                    </span>
                                                                                                                </a>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </section>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <a href={`${serverUrl}${e.id}`} class="jet-engine-listing-overlay-link"></a>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
