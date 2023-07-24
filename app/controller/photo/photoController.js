const Photo = require('../../model/photoModel');
// const Photo_Likes=require('../../model/photoLikesModel');

exports.get_all_photos = async (req, res) => {
    try {
        const photos = await Photo.findAll({})

        res.status(200).json({
            status: 'success',
            photos
        });

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
    ;
};

exports.get_photos_by_category_id = async (req, res) => {
    try {
        const photos = await Photo.findAll({where: {categoryId: req.params.id}})

        res.status(200).json({
            status: 'success',
            photos
        });

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
    ;
};

exports.get_photos_by_publisher_id = async (req, res) => {
    try {
        const photos = await Photo.findAll({
            where: {
                publisherId: req.params.id
            }
        });

        res.status(200).json({
            status: 'success',
            photos
        });

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
    ;
};

exports.get_photo_by_id = async (req, res) => {
    try {
        const photo = await Photo.findByPk(req.params.id);

        res.status(200).json({
            status: 'success',
            photo
        });

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
    ;
};

exports.add_a_photo = async (req, res) => {
    try {
        const photo = await Photo.create(req.body);

        res.status(201).json({
            status: 'success',
            photo
        });

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
    ;
};

exports.update_a_photo = async (req, res) => {
    try {
        const photo = await Photo.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        res.status(200).json({
            status: 'success',
            photo
        });

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
    ;
};

exports.delete_a_photo = async (req, res) => {
    try {
        const photo = await Photo.destroy({
                where: {
                    id: req.params.id
                }
            }
        )

        res.status(200).json({
            status: 'success',
            photo
        });

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
    ;
};


// LIKE SYSTEM

// exports.add_a_like = async (req, res) => {
//     try {
//         const photo = await Photo_Likes.findOne({
//             where: {
//                 photoId: req.params.photoId,
//                 likerId: req.params.likerId
//             }
//         });
//         var isLiked = false;
//         const likersArray = [];
//
//         photo.likers.forEach((f) => {
//             likersArray.push(f);
//             if (f !== null && f.id === req.params.likerId) {
//                 isLiked = true
//             }
//             ;
//         });
//
//         if (!isLiked) {
//
//             likersArray.push({"id": req.params.likerId});
//             photo.likers = likersArray;
//             photo.likes += 1;
//             photo.save();
//
//             res.status(200).json({
//                 status: 'success'
//             });
//
//         } else {
//             res.status(400).json({
//                 status: 'failed',
//                 message: "You already liked"
//             });
//         }
//     } catch (error) {
//         res.status(400).json({
//             status: 'failed',
//             error
//         });
//     }
// }
//
// exports.delete_a_like = async (req, res) => {
//     try {
//
//         const photo = await Photo.findById(req.params.photoId);
//
//         photo.likers.forEach((f, index) => {
//             if (f !== null && f.id === req.params.likerId) {
//                 photo.likers[index] = null;
//                 photo.likes -= 1;
//                 photo.save();
//             }
//         });
//
//         res.status(200).json({
//             status: 'success',
//         });
//
//     } catch (error) {
//         res.status(400).json({
//             status: 'failed',
//             error
//         });
//     }
// }