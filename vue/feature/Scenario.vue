<template>
    <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="x_panel">
            <div class="x_title">
                <div v-if="scenario.tags && scenario.tags.length > 0" class="tags">
                    <Tags :tags="scenario.tags"/>
                    <ExternalLinks :externalLinks="scenario.externalLinks"/>
                </div>
                <h2 class="title">
                    <span>Scenario:</span>
                    <span>{{scenario.name}}</span>
                </h2>
                <h2 class="title scenario-link">
                    <router-link :to="{name: 'scenario', params: {fid: fid, sid: scenario.id}}" class="pointer"><i class="fa fa-external-link"/></router-link>
                </h2>
                <ul class="nav navbar-right panel_toolbox">
                    <li v-if="scenario.passed > 0">
                        <span class="step passed-background" data-toggle="tooltip" title=""
                            data-original-title="Scenario is passed">
                        {{scenario.passed}}
                        </span>
                    </li>
                    <li v-if="scenario.failed > 0">
                        <span class="step failed-background" data-toggle="tooltip" title=""
                            data-original-title="Scenario is failed">
                        {{scenario.failed}}
                        </span>
                    </li>
                    <li v-if="scenario.skipped > 0">
                        <span class="step skipped-background" data-toggle="tooltip" title=""
                            data-original-title="Scenario is skipped">
                        {{scenario.skipped}}
                        </span>
                    </li>
                    <li v-if="scenario.notdefined > 0">
                        <span class="step not-defined-background" data-toggle="tooltip" title=""
                            data-original-title="Scenario is undefined">
                        {{scenario.notdefined}}
                        </span>
                    </li>
                    <li v-if="scenario.ambiguous > 0">
                        <span class="step ambiguous-background" data-toggle="tooltip" title=""
                            data-original-title="Scenario is ambiguous">
                        {{scenario.ambiguous}}
                        </span>
                    </li>
                    <li v-if="scenario.pending > 0">
                        <span class="step pending-background" data-toggle="tooltip" title=""
                            data-original-title="Scenario is pending">
                        {{scenario.pending}}
                        </span>
                    </li>
                    <li>
                        <span style="font-size:1.2em">Duration:</span>
                        <span style="padding-right:5em">{{scenario.time}}</span>
                    </li>
                    <li>
                        <a class="collapse-link" @click="toggleStepsVisibility">
                            <i :class="'fa fa-chevron-' + chevron"></i>
                        </a>
                    </li>
                </ul>
                <div class="clearfix"></div>
            </div>
            <div v-show="isDisplayed" class="x_content">
                <Step :step="step" v-for="(step, index) in scenario.steps" :key="index"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Step from "./Step.vue";
    import ExternalLinks from "../global/ExternalLinks.vue";
    import Tags from "../global/Tags.vue";

    export default {
        name: "Scenarios",
        props: {
            scenario: Object,
            fid: String
        },
        data() {
            return {
                isDisplayed: false
            }
        },
        computed: {
            chevron() {
                return this.isDisplayed ? "up" : "down"
            }
        },
        methods: {
            toggleStepsVisibility() {
                this.isDisplayed = !this.isDisplayed
            }
        },
        components: {
            Step,
            ExternalLinks,
            Tags
        }
    }
</script>

<style scoped>
    .title {
        max-width: 80%;
    }
    .title > a {
        color: inherit;
    }
    .scenario-link {
        padding-left: 5px;
    }
</style>
