const ProjectPage = {
    createNewProjectBtn: '#createButton',
    projectName: '#project-name',
    projectCode: '#project-code',
    projectDesc: '#description-area',
    projectAccessType: {
        private: '[value="private"]',
        public: '[value="public"]'
    },
    memberAccess: {
        all: '[value="all"]',
        group: '[value="group"]',
        none: '[value="none"]'
    },

    cancelBtn: '.LzltDs.HRmKBJ.MBIQUEc',
    createBtn: '.MfLTYs > .tscvgR',
    projects: {
        TESTP: '.project-name[href="/project/TESTP"]'
    }
}

module.exports ={
    ProjectPage
}