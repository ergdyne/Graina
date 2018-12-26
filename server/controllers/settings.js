import settingsJSON from '../operations/settingsJSON'

module.exports={
  async retrieve(req, res){
    try {
      const settings = await settingsJSON();
      res.status(200).send(settings);
    }
    catch (e) {
      return res.status(400).send(e);
    }
  }
}