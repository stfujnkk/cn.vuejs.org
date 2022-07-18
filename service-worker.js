/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2019/02/18/hello/index.html","0ea732cf40e17d052e8e5136dd2b3b55"],["about/index.html","be8bc65db728ab3a16c98fb98da6b200"],["api/index.html","176a72f4aaa42c3b6a404d370e87fbb8"],["archives/2019/02/index.html","4495e9a4ce2319f9a1532f9c7c18d62b"],["archives/2019/index.html","49a05ebf8ee6bfa4a44ccfcf6491e95c"],["archives/index.html","d718494d6d1e2999873e35e4c4507879"],["coc/index.html","a551b8dc611a8c814ede3229a19bf0cf"],["css/benchmark.css","b083e0006589a5ba88a250eb8ee12cc5"],["css/index.css","dd1c21b9ac04c71e7277dcbb8b8a2478"],["css/page.css","6e4535e241ba379379d2cbc740fd295b"],["css/search.css","98bc5fed33d9deaea04ed36de435afd7"],["examples/commits.html","3cd3b2db40187e7f2d236473bae9ce59"],["examples/elastic-header.html","198f4c19911bf30785905adb996ef899"],["examples/firebase.html","266080b80e262a2b93289d466d1337b5"],["examples/grid-component.html","3119ba25bb6b9dcc2f40d3f60e2136df"],["examples/hackernews.html","f793aeb8d340c60945b0a58f3afa25c9"],["examples/index.html","dc91b34e726c12318c4d083a3090c156"],["examples/modal.html","88b6a98ec8a44cd783eaf0d71fcf46a7"],["examples/select2.html","b812ad3b215af513c979c0d9759fe5c9"],["examples/svg.html","0a1876c72d22212d243ed8c2d5b0404e"],["examples/todomvc.html","a048618225f78a66ff322bb1dde98a37"],["examples/tree-view.html","4815e09c4b3af4132da0e95dc1fbc945"],["fonts/Dosis/Dosis-Medium.ttf","1a7809b30cc0cb7fc96feb3cad2eefb7"],["fonts/Roboto_Mono/RobotoMono-Regular.ttf","a48ac41620cd818c5020d0f4302489ff"],["fonts/Source_Sans_Pro/SourceSansPro-Light.ttf","b2e90cc01cdd1e2e6f214d5cb2ae5c26"],["fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf","ba6cad25afe01d394e830f548a7f94df"],["fonts/Source_Sans_Pro/SourceSansPro-Semibold.ttf","52984b3a4e09652a6feee711d5c169fd"],["guide/class-and-style.html","a3174f2083dd58fbd1aa965dcc98133f"],["guide/comparison.html","7c06634379b01b8e7ef0dfc90b9b8517"],["guide/components.html","d98663b0d45a91f0a40541c1efe2bbfc"],["guide/computed.html","3fcf408c7cdfd856ea75b6a5562ba8aa"],["guide/conditional.html","896e19e7955f2616eb31ab4d8c65178c"],["guide/custom-directive.html","697987fdd04783febdbff2aa2932c41d"],["guide/deployment.html","be96515c673712671d042337366ddf63"],["guide/events.html","0ebaec88003f2e1ab59ff868764d961a"],["guide/forms.html","09ead2d35e42cdd09d848b27ec357491"],["guide/index.html","e3171c7c94b236d5caa91894d8fdd581"],["guide/installation.html","8acd1ab4fbaa082958259bf3a22d7b22"],["guide/instance.html","61021765831307e8278d034c23502dd6"],["guide/join.html","f2287c54050c9b576ed05af7baf6af73"],["guide/list.html","772e05d65b4587501785906a4b681efd"],["guide/migration-vue-router.html","e0d8a3e2dc09e2bda939c23c1e967765"],["guide/migration-vuex.html","9b8659c8a4506acd24f2c0e3bee160f3"],["guide/migration.html","af37d4bfb217e88a7f02eb92c446497f"],["guide/mixins.html","270f751a44e1d1e18b9a31406a34fe8b"],["guide/plugins.html","40467c9724e4917ae32582ac543db41b"],["guide/reactivity.html","5b1e83c4a12b5f3e687e89e0a0b1ef05"],["guide/render-function.html","4139dd80783f9eecb92d57dcf23dc54d"],["guide/routing.html","f7f89a93550ee84e925ed84d6912a650"],["guide/single-file-components.html","095eb3d7152439579d7a56227fe273f4"],["guide/ssr.html","9143accd02c56349a3ec40d79eeefb4d"],["guide/state-management.html","81ea6d4aee3ef538b507e4a5a0c3e3a0"],["guide/syntax.html","611a256a910e0d1adfd5b418535e0ac1"],["guide/transitioning-state.html","3f36248a3d9f6f21f10725f15775c5d6"],["guide/transitions.html","4513c62165ee217697830a40e1795365"],["guide/unit-testing.html","0f69c6b7a8d743af6384b8a2208b9a33"],["images/Monterail.png","bf1ec94a0ca48f0e6be0c97fa60a42c0"],["images/aaha.png","77bfeb59f772f37444c9cefe00785cf2"],["images/accelebrate.png","e030e08131cebe8b43c89df18d710ded"],["images/alligator_io.svg","1ffe0191e22a65337f9cb224790f5222"],["images/authing.svg","fe3cf35736bbed30e479425bbd3623e5"],["images/autocode.svg","4319bc58220eb3ffaa993488c171c0dc"],["images/bacancy_technology.png","9a0590eb4ce29289b454240415611162"],["images/bestvpn_co.png","afbe252b6b59bc3cdac2e7dec69eac39"],["images/betting_bet.png","0611ea789636d8aff211ece0d146640d"],["images/bit.png","9638a3f44bf471876effb80ea0659f73"],["images/blokt_cryptocurrency_news.png","0ecada49bad35aabc864a8df221fd816"],["images/breakpoint_hit.png","114924925a4ec0f23236012bc3dc8422"],["images/breakpoint_set.png","6439856732303cfeb3806d52dd681191"],["images/chaitin.png","549e43997790dc624c477424acbfe228"],["images/check.png","c634675b753a1a03b587c43d8b535600"],["images/cloudstudio.png","fc480cf4c2b06591f58e7e91666226af"],["images/coding.png","10c55345da3c2374563b096f5c86d781"],["images/coin-bch.png","ddfab54149483e02f3cd540a47e2782b"],["images/coin-btc.png","d90559bb202766dd6ddabf71dd1680be"],["images/coin-eth.png","70ae70292937880fe9e77c2c7dc38f86"],["images/coin-ltc.png","9e756bd611ac7355515153cecbc20d36"],["images/components.png","b5c08269dfc26ae6d7db3801e9efd296"],["images/config_add.png","353cd8b2a1bdf9fc4c74a80c5f38090a"],["images/daily.png","c9a8b2a897dba41c7d5aa6f9cd876d82"],["images/das_keyboard.png","8ef8378582a6713c038ea8b2e065f5cd"],["images/daskeyboard.png","8ef8378582a6713c038ea8b2e065f5cd"],["images/data.png","5de7af21d4c2de951720c006f84b98fc"],["images/dcloud.gif","78338ea80dbe45402fd0b3bfa354754b"],["images/dcloud1.png","fd6cc1ee1e73e3f641c9c19f1c2e346b"],["images/dcloud2.png","ad6bf984b1c91c89b0adcf07e60320dc"],["images/derek_pollard.png","b1c4d535b619865d80d6cf1b2e370300"],["images/devexpress.png","a6d9c786a373088c8d238ca643293c17"],["images/devsquad.png","e639ea4fd0d7053fc0928d4ff9fefb2a"],["images/devtools-storage-chrome.png","ac1f3b275b87e2fec9c4df951347be81"],["images/devtools-storage-edge.png","3e92a3bea017b8398e71db0a2419a191"],["images/devtools-storage.png","e742c3b1d526bee7be77c050f4bffc92"],["images/devtools-timetravel.gif","fca84f3fb8a8d10274eb2fc7ed9b65f9"],["images/dom-tree.png","f70b86bfbbfe1962dc5d6125105f1122"],["images/dopamine.png","17222090b66cfca59f1ccf8b9843f595"],["images/down.png","2f948222df409af3121254d5fe0ed377"],["images/doximity.png","22a5a6e8252a1511591be4faf68cb5a5"],["images/dronahq.png","38cd88387e365f02eb62ba6fc9e7aaef"],["images/earthlink.png","88f1bd15252b11484834176965844e22"],["images/empiricus.png","61c6588dde677493351be6bc0eccc854"],["images/emq.png","5d7526f3b64b3eff5811a35b462d1acd"],["images/energy_comparison.png","1f3f2809057b867842c99679e2723b3e"],["images/exmax.png","32e07b09290df956dba4b2420a7a81db"],["images/fastcoding_inc.png","08a0a7652db79fa3395c0ef28d49f0cd"],["images/fastcoding_inc.svg","ff35e14cb519fe5d76e6e8d9444e4fa6"],["images/feed.png","a9bbd11a96e1cbcc49bf8fa857a0d70f"],["images/fen_tre_online_solutions.png","77828afcb333a41ce58a4f58d85894e6"],["images/fen_tre_online_solutions.svg","187c82570b993e2d4494627b00b18807"],["images/finclip.png","37f296ec720474270079b353f4fe2b1c"],["images/firestick_tricks.png","1ee05223a5b12fe910cb8428d57223d8"],["images/flatlogic_templates.svg","925f0c4421cc6d86ebc9d6788b519220"],["images/flowdash.png","185243e4a2929e426a5287850c9acdaa"],["images/foo.png","1c9cde53bb9c98a316edc93d57684e4d"],["images/free_bets_us.png","8181ea6e9415589808fc2ee66d9dc6fe"],["images/frontendlove.png","1ded4719274d362c27031ad4ba3f86a5"],["images/geekbang-ad.jpg","7ab75cf133fd8bc36861403f743cea82"],["images/geekbang-vue-ad.gif","e7fae85ac459b6e43a71948c0561ef12"],["images/gitee.png","429b3c31a180461c4fb66e5ac20e1385"],["images/gridsome.png","e82a2f872ec319bbb5d0a804288cd9b7"],["images/happy_programmer_llc.png","3f3303d42a57ff9edf36373f59d376af"],["images/hbuilder.png","f269004b31954b02be293f6d59f14af3"],["images/hn-architecture.png","b42f49a4e265649f870685b171e4b170"],["images/hn.png","99176cdebac521e823be519aef514bb3"],["images/html_burger.png","c7ce1344d001e7a236a89694ed59d988"],["images/icons.png","ad6ee8c400066e15712cdef4342023da"],["images/icons/android-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["images/icons/android-icon-192x192.png","5d10eaab941eb596ee59ffc53652d035"],["images/icons/android-icon-36x36.png","bb757d234def1a6b53d793dbf4879578"],["images/icons/android-icon-48x48.png","0d33c4fc51e2bb020bf8dd7cd05db875"],["images/icons/android-icon-72x72.png","702c4fafca31d670f9bd8b2d185ced39"],["images/icons/android-icon-96x96.png","0ebff702851985ea6ba891cf6e6e7ddd"],["images/icons/apple-icon-114x114.png","f4fd30f3a26b932843b8c5cef9f2186e"],["images/icons/apple-icon-120x120.png","b6a574d63d52ef9c89189b67bcac5cbd"],["images/icons/apple-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["images/icons/apple-icon-152x152.png","f53787bf41febf2b044931a305ccaf2a"],["images/icons/apple-icon-180x180.png","9f6b1e3b92b2c5bd5b7d79501bb6e612"],["images/icons/apple-icon-57x57.png","83f622ba0994866abc56ace068b6551c"],["images/icons/apple-icon-60x60.png","643f761bc39f86c70f17cd1fed3b8e08"],["images/icons/apple-icon-72x72.png","702c4fafca31d670f9bd8b2d185ced39"],["images/icons/apple-icon-76x76.png","94d9af047b86d99657b5efb88a0d1c7b"],["images/icons/apple-icon-precomposed.png","707758f591323153a4f1cb3a8d9641fa"],["images/icons/apple-icon.png","707758f591323153a4f1cb3a8d9641fa"],["images/icons/bacancy_technology.png","5810bb8253b1e35ba437373ff83f82d3"],["images/icons/favicon-16x16.png","a5a9da66870189b0539223c38c8a7749"],["images/icons/favicon-32x32.png","3d60db0d77303b2414ddd50cf2472bf7"],["images/icons/favicon-96x96.png","0ebff702851985ea6ba891cf6e6e7ddd"],["images/icons/ms-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["images/icons/ms-icon-150x150.png","e8cdf492981122a2548bc247c7b4067d"],["images/icons/ms-icon-310x310.png","1721f8303ec2349002b5980a01f27cef"],["images/icons/ms-icon-70x70.png","a110cf0132b00b23a8605ca72a8874ba"],["images/icons_8.png","e386832a598b7dbd8405108dac787ca5"],["images/imooc-ad.png","9686f3f6da6b8804a483ba8e1f8a77a9"],["images/imooc-ad2.png","1980fd121849fea1cc67ae58c73a55a3"],["images/imooc-ad3.png","a8b8084e0bb616cef5637f589d0c3a49"],["images/imooc-sponsor.png","7ddc7f938fbbc08f816a888225786a4c"],["images/imooc-sponsor2.png","ce9575f62520e0ac8b7d93ada2c6b274"],["images/inkoop.png","1cff77d2c927657d3aceeba2c12db892"],["images/intygrate.png","fdd390b44a4aeed763f53f4e8f6529e4"],["images/ionic.png","05da967b8d61bbce5aa3ddc47c819bd5"],["images/isle_of_code.png","42f662ab71b943889f8f8b56515350f2"],["images/isolutions_uk_limited.png","0f76512940c38b72fcf48337b4d64692"],["images/jqwidgets_.png","b6a0a55c85816adb196e1f7450a7f3d7"],["images/jqwidgets_ltd.png","6d209e39ca89483f3677ae859edca4d7"],["images/laravel.png","1a01f23acfb4fb042dc4e5a3e5e663c8"],["images/layer0.png","fe10ae786f2d7234921ee02369aa8513"],["images/lendio.png","83de7028daf74d515c462c41e945154a"],["images/lifecycle.png","6f2c97f045ba988851b02056c01c8d62"],["images/line_corporation.png","51fcc307909b7505d1cc4e337d7c6fa1"],["images/litslink.png","41178830976ade9f1f163dc400b77018"],["images/logged-proxied-data.png","716e3c41aacf453cfaedd61c2795f0ec"],["images/logo.png","cf23526f451784ff137f161b8fe18d5a"],["images/logo.svg","346e12ee28bb0e5f5600d47beb4c7a47"],["images/lowdefy.png","4af7e47e701c3a1d3101acdd95e8bbee"],["images/marcus_hiles.png","8b55f40abd154200ce72b8cdb6a8d90f"],["images/memberful.png","8f11061a5ee1d58a91855b3671b79505"],["images/memory-leak-example.png","c2fae8bd6d8fa50632f9cde80be8b3f6"],["images/menu-blm.png","b0c054903425b560ae6828e6c732995e"],["images/menu.png","0b414c367f5e7c0eb1b40f1076216b08"],["images/modus.png","6498c04fee5b8542449b350e77180379"],["images/mvvm.png","4fbd3c1bc80d47038f3e66cf1478a1a3"],["images/nativescript.png","05c94493b428db55bb441faaca4b02d8"],["images/neds.png","1f1a2a46c2575019ae07a90205f60b65"],["images/netflix_vpn.png","ac75acaa7e0c6c12511cb2d3aed3c0c6"],["images/newicon.png","befb5ccdbfcc16fdb7f57195d13b506c"],["images/nuxt.png","8aa12e03c917d7985455e4b16a609845"],["images/okay.png","3fdb892c86df8ef6a2088d38be7be941"],["images/onsen_ui.png","e41569bcb10fbca3f361d818b29ed7fd"],["images/onyx_gaming_limited.svg","716ff655e040e17dfe1489d9993241ef"],["images/opteo.png","e80eaa359d4722af5fd8fed79fb9eec5"],["images/oxford-comma.jpg","8a220093d78172e4eb9d98529f9fba05"],["images/passionate_people.png","fefdc6671ef83bc03a4003c91524f49e"],["images/patreon.png","99eb0cdcab5f46697e07bec273607903"],["images/paypal.png","067bd556ce9e4c76538a8057adb6d596"],["images/philip_john_basile.gif","35fc21939087e126d93d173491900c70"],["images/piratebay_proxy.png","c3049e3d886a22dfd0d5c8eaba67b8ff"],["images/piratebayproxy.png","c3049e3d886a22dfd0d5c8eaba67b8ff"],["images/plaid__inc_.svg","c056bb2528390925fa3100d0dd0aeddb"],["images/plaid_inc_.svg","c056bb2528390925fa3100d0dd0aeddb"],["images/primevue.png","60f2e8fb0dce3e9045fc3a2a8039fa82"],["images/programmers_io.png","02cb415eb9a8e9ce6579c7aff03759dd"],["images/props-events.png","8996ef20503fbf264a0bfdeafccca74a"],["images/pullrequest.svg","50847513b306736d33234d50b11c5e1d"],["images/qingfuwu-v2.svg","1da6cf95b68d8987369fdfa1c54fdf76"],["images/quickbooks_tool_hub.png","b74acbde8b8dbdc65326ec0ae3b49171"],["images/refurbed.png","5242c521dbfd003177be9e8bbacf4b2d"],["images/retool.png","aaad6a749deb625da5771750dcb51920"],["images/roadster.png","080fb711e736d686f182358a582d7c6b"],["images/search-by-algolia.png","3f22d84b817bb896bd5bef0705ff8fc7"],["images/search.png","3a38056b0f3ec4fcac63c4d1c3841cab"],["images/shopware_ag.png","e2ded483c0660bd629938e37f388d9fb"],["images/shopware_ag.svg","5d2a8176b6e1b0a348339746de3edf28"],["images/special-sponsor-spot.png","860ea231e9bd1b3ff35e627eb83bb936"],["images/staff_augmentation.png","999025bb7194afd0fb71a94dbe77146f"],["images/state.png","6a05b01942c7d2cff4ea0033ded59ebb"],["images/stdlib.png","8693858c969505b29339bf84c0a5cbdf"],["images/storekit.png","cacf47116e5efe9fc2dcd60ebc197707"],["images/storyblok.png","64ec1772109b769e91138b58526484ad"],["images/syncfusion.png","fd1617455479c2e3265656c167faeb91"],["images/takt.png","87e12cbcad945fb803a137c0bab9aea0"],["images/tatvasoft.png","190054ad2ba75d05ee3fb2f747a70548"],["images/team_extension_north_america_inc.png","8d43aeceffc8388b244d46a7d3adae15"],["images/tee__.png","ea5fd763d459d3942e50c323fa32988a"],["images/tencent-ad.png","adf85e09ed9c9a5c91d83b9ecf7bd3dd"],["images/tendermint.png","a529fd7a1a0d62f2cb7953e87f8687ce"],["images/tidelift.png","831935bd53d7d2d4eea9427c5f874816"],["images/tighten_co.png","003364e7044150e2979cbfe03d640cec"],["images/tooltwist.png","b81bfd5ae608e965d03aaa5a4164373e"],["images/transition.png","5990c1dff7dc7a8fb3b34b4462bd0105"],["images/troypoint.png","234405cb7bb8ff472d19bc1b76a59027"],["images/typescript-type-error.png","1665e7350370c091d397383a7355d3a6"],["images/unicorn_io.png","e0c072bd78f366471a393b9c366c9b74"],["images/usave.png","5cffd5053b1d75ae49c9b6eb176e0ccf"],["images/valuecoders.png","818ca42a745e018ace0c55c36a7ae3dd"],["images/vant.png","802bad3fb5ca2a791682fc27c5af22f8"],["images/vehikl.png","3bd1b88aa9d242d308e838f2342d7660"],["images/vpn_review.png","7d40e6362db451204e14ffdc8a42a80f"],["images/vpnranks.png","35d7392e773d487e13358d8b5f7fb646"],["images/vpsserver_com.png","7ed2ee5d1cc7ca87137751880d84b566"],["images/vue-component-with-preprocessors.png","a5cb959052c9cda793e23a6e3a6a122c"],["images/vue-component.png","6a7040cfd4330a536d980c69e2e8dd18"],["images/vuejobs.png","77ed618e17571d1a2d77ad7bc53e8fc4"],["images/vuemastery.png","6f09ce143467fba22039bde3f2070c19"],["images/vueschool.png","3d92b4f1a8fcbe3be0d0e89950a1a705"],["images/vuetify.png","c7cfff77abb10162cb0b7c2ed3b6ac51"],["images/vuetraining_net__note__since_i_m_not_sure_where_else_to_put_it____this_is_replacing_vuescreencasts___they_re_both_run_by_me__i_m_just_switching_where_i_want_my_sponsorship_to_point_.png","4f23eba857989b1203ed74c10abca9e7"],["images/watchcartoononline.png","f7cf1082b14003908496f02f9eb2ae00"],["images/webdock.png","6b8d3d271ba4d05daf83ad75d21221d1"],["images/webreinvent_technologies_pvt_ltd.svg","ce034a8b2acd87648d82d6958e0e6c5f"],["images/webucator.png","3c87885f4c36bc1b07f8c2b547e84b6f"],["images/wilderminds.png","cd98b69653b51369da2e765097f13d6f"],["images/writers_per_hour.jpg","2033e6d7e88969e97e78e38d8d030eb9"],["images/x_team.png","a6cfaebb0c0dc17d348bc9c6fd5758ef"],["images/xinguan.png","9eedb6a8a2ee1b0deded1cbadb2680a5"],["images/xitu.png","86030e462022c97c805d9fd9fd7f3de9"],["images/y8.png","3cdd8826d3419751f40a8aa7f90cd539"],["images/yakaz.png","f1918919114e35d6091e67370450e8bd"],["images/youku.png","1cce2782971aed63d38b17e28614d512"],["index.html","4d8cf750d92d2ebde9441b0f0d21ee71"],["js/common.js","c15bf28a7be04b3c45976a5c6638cd9d"],["js/css.escape.js","fe4db48c9e3f272a6d12cf1312de889e"],["js/smooth-scroll.min.js","ecaa94f311c27bd2ac704a9658ff9cef"],["js/theme-data.js","e2765530550268ec01bdb30808560f48"],["js/vue.js","dc2b5bab7fdb71b8d26504b73bdb453c"],["js/vue.min.js","b81d002cdb9dde4d7accc4e37eae2cc3"],["menu/index.html","1e003abd632e897ce2b895042d3ef0a5"],["perf/index.html","afbf4bafc6e4b4de42d41efeb5adc21b"],["resources/partners.html","b0d8e76c0b2bec0c3b4e37ca5db02ce2"],["resources/themes.html","ddc7ee952bbf57cab10e59ef1b5ca051"],["support-vuejs/index.html","6205449c9de00e943f613e15483188be"],["v2/api/index.html","d1b7ee04d117c6953008710d58c28599"],["v2/cookbook/adding-instance-properties.html","746ed5f228d396c16f136e29d475be59"],["v2/cookbook/avoiding-memory-leaks.html","e239c988d15a2e33186133fc88219c69"],["v2/cookbook/client-side-storage.html","fa4af815d2e0ad64ee9b87a8275e06cb"],["v2/cookbook/creating-custom-scroll-directives.html","c4b3902c6dac5e1391961ed36cce1ab1"],["v2/cookbook/debugging-in-vscode.html","cf9144964e8e440908e22567109c8156"],["v2/cookbook/dockerize-vuejs-app.html","e332289ed9d3e84dd4e2dcf2bfcfcfdb"],["v2/cookbook/editable-svg-icons.html","8a8ea7746b5ffdb7fb90d43b411f7657"],["v2/cookbook/form-validation.html","3d7066666df08adc58159be8644da817"],["v2/cookbook/index.html","e4ff7756f62c9064bdcb4af7721c8d8d"],["v2/cookbook/packaging-sfc-for-npm.html","7c33690cea1e082edbfaf687a77d3421"],["v2/cookbook/practical-use-of-scoped-slots.html","a16924a79b9a5292906c09f3c524ade6"],["v2/cookbook/serverless-blog.html","72214a1677f5c917a97de7f1a34bc312"],["v2/cookbook/unit-testing-vue-components.html","b4de7227d9021ff53442d5372f0053d0"],["v2/cookbook/using-axios-to-consume-apis.html","fbbc3e8be67dd3e04aff8ab20cad4e98"],["v2/examples/commits.html","098758c4970bd0f6e6b1289418a5dcee"],["v2/examples/deepstream.html","af4a03741baefe32d2ab24e3886243f8"],["v2/examples/elastic-header.html","c6408576bbc859fb8b54d5573f5f7875"],["v2/examples/firebase.html","60499b7fe6edbe263c9bdccf244bbbd2"],["v2/examples/grid-component.html","237e560639ef6955c22a3bbc79d83d2d"],["v2/examples/hackernews.html","d69d41eb3173f6f115ecd62fd546130f"],["v2/examples/index.html","676cec539b3ea672aebcfd627f67c0eb"],["v2/examples/modal.html","a62a57c09803e587d122d6b4960ea66f"],["v2/examples/select2.html","c5a20352c1d429cb81d145ee2d8fa38a"],["v2/examples/svg.html","f750c09857440f9dcee990be3270aa13"],["v2/examples/todomvc.html","50ebfde808329808123eee9888f2d843"],["v2/examples/tree-view.html","34a2305d7bce71a3552efe5eaeedec48"],["v2/examples/vue-10-two-way-currency-filter-v2/index.html","ff12c9e8aa2566a975d7454c400b9b86"],["v2/examples/vue-10-two-way-currency-filter-v3/currency-validator.js","38c3c6804f52f9dc0e1e1d3f0df71576"],["v2/examples/vue-10-two-way-currency-filter-v3/index.html","9ac58f4dcbf53370056a78190abe3307"],["v2/examples/vue-10-two-way-currency-filter/index.html","b4a300f2bb287e072c40f35c5d776348"],["v2/guide/class-and-style.html","c08b0f63a7ab8916c0c8f240d5ba990d"],["v2/guide/comparison.html","12fa42e08299e5cf532230c6d31c0398"],["v2/guide/components-custom-events.html","cd45688958d70da9de3d06ac6497b1cc"],["v2/guide/components-dynamic-async.html","0e3749c5354a94c78bca7c6b41d31871"],["v2/guide/components-edge-cases.html","e3704bd84efe56a52468c3ee8f6fc4bf"],["v2/guide/components-props.html","2794c6766a3392682ee69592fc9d9548"],["v2/guide/components-registration.html","246b7cf0d72df7e3bd403b9e78713285"],["v2/guide/components-slots.html","429b8f3bc8aeb6507227c5c540db960c"],["v2/guide/components.html","464933d624d2bf90c8bf2f0e3e654580"],["v2/guide/computed.html","3d9e90c2cf853d58d6831e40d1de0f5c"],["v2/guide/conditional.html","cff9be91cdc645cfb56def5083af0f87"],["v2/guide/custom-directive.html","de83435d152465a72eb036ba68c2fa8d"],["v2/guide/deployment.html","b3e9c5d755bda34420f5165e2429adcb"],["v2/guide/events.html","b5ebd4e0d2c9402b9a882b35e6d5e753"],["v2/guide/filters.html","e3cb22f3ce47661f0ebe737d5b2f14e4"],["v2/guide/forms.html","9421364f84dc41be39c88dc60f642d81"],["v2/guide/index.html","75a0ce8739e398c90a159347c89adf10"],["v2/guide/installation.html","b46b35302178617f6ae263382bcd71a1"],["v2/guide/instance.html","e4e8c959e3010a63c149eb09439a8f7a"],["v2/guide/join.html","b802976cef9858b47cb45635ff4486ba"],["v2/guide/list.html","98d7d32c9004ae63108d17e8d8dca9dd"],["v2/guide/migration-vue-router.html","1d11dc2f4a7918d47e5d42ac69950ccc"],["v2/guide/migration-vuex.html","a878554a28d7f1e201d75ed6bda1483a"],["v2/guide/migration.html","b9b1c4198559074c5c36b0de7d53db9f"],["v2/guide/mixins.html","c81d3542748f6397591eda167660c2e8"],["v2/guide/plugins.html","667447d197759d8a0ea2124982c58851"],["v2/guide/reactivity.html","2f88b2a37c41c7d29c1e2b4e7b25d269"],["v2/guide/render-function.html","5245a27073e2dc2b51e8a336f483d8d5"],["v2/guide/routing.html","18f32be09089c3033c034040d3ee4906"],["v2/guide/security.html","07103b7b821e926abc8aca9ab5031481"],["v2/guide/single-file-components.html","c6845a895d010e7bfd0c72b9731c5ea1"],["v2/guide/ssr.html","e96b9d6ec1e5364d16be1dfc6e2d2a74"],["v2/guide/state-management.html","818663d77e2188927ad685c2fe7867f1"],["v2/guide/syntax.html","12c3a6f4f81ea8773daccc564bce6e17"],["v2/guide/team.html","f5e9f07afdb5c61e9a0d91ee16e118f5"],["v2/guide/testing.html","8b69e59c1fed83e753ce398f40e61c45"],["v2/guide/transitioning-state.html","d5e44a505fefe74aefae3a3846a6e639"],["v2/guide/transitions.html","527905fa89418fb6cc1acb5eaed66d1f"],["v2/guide/typescript.html","b39c8a2d70879513fdf1eae0256e5a8a"],["v2/search/index.html","819e6a41bd7505016bf7f16168d443b2"],["v2/style-guide/index.html","80436706ac526c584d64082c3a942ac4"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







