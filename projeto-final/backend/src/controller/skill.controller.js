const router = require('express').Router()
const model = require('../model/skill.model')

router.get('/skill', async (_, res) => {
    const skills = await model.getAllSkills()
    res.json(skills)
})

router.get('/skill/:id', async (req, res) => {
    const skillId = req.params.id
    const skill = await model.getBySkillId(skillId)

    res.json(skill)
})

module.exports = router
