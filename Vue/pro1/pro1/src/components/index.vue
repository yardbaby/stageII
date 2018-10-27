<template>
    <div>
        <IncHeader/>
        <div class="index_36kr">
            <div class="pagewrap">
                <div class="mainlib_flex_wapper">
                    <IndexMain/>
                    <IndexSide/>
                </div>
            </div>
        </div>
        <IncFooter/>
    </div>
</template>

<script>
import IncHeader from './inc/inc_header'
import IncFooter from './inc/inc_footer'
import IndexMain from './index_main'
import IndexSide from './index_side'

export default {
    name: 'index',
    components: {IncHeader, IncFooter, IndexMain, IndexSide}
}
</script>

<style>

</style>


